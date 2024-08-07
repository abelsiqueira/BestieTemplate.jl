function _git_setup()
  run(`git init -q`)
  run(`git add .`)
  run(`git config user.name "Test"`)
  run(`git config user.email "test@test.com"`)
  run(`git commit -q -m "First commit"`)
end

function _with_tmp_dir(f, args...; kwargs...)
  # Can't use mktempdir on GitHub actions willy nilly (at least on Mac)
  tmpdir = get(ENV, "TMPDIR", mktempdir())
  # Mac is a complicated beast
  if Sys.isapple() && get(ENV, "CI", "nothing") == "nothing"
    tmpdir = "/private$tmpdir"
  end

  mktempdir(tmpdir, args...; kwargs...) do x
    cd(x) do
      f(x)
    end
  end
end

function _basic_new_pkg(pkgname; run_git = true)
  Pkg.generate(pkgname)
  if run_git
    cd(pkgname) do
      _git_setup()
    end
  end
end

function _test_diff_dir(dir1, dir2)
  ignore(line) = startswith("_commit")(line) || startswith("_src_path")(line)
  @testset "$(basename(dir1)) vs $(basename(dir2))" begin
    for (root, _, files) in walkdir(dir1)
      nice_dir(file) =
        replace(root, dir1 => "") |> out -> replace(out, r"^/" => "") |> out -> joinpath(out, file)
      if nice_dir("") |> x -> occursin(r"[\\/]?git[\\/]+", x)
        continue
      end
      @testset "File $(nice_dir(file))" for file in files
        file1 = joinpath(root, file)
        file2 = replace(file1, dir1 => dir2)
        lines1 = readlines(file1)
        lines2 = readlines(file2)
        for (line1, line2) in zip(lines1, lines2)
          ignore(line1) && continue
          @test line1 == line2
        end
      end
    end
  end
end

"""
Constants used in the tests
"""
module C

using BestieTemplate.Debug.Data: Data

"Transforms the dict 'k => v' into copier args '-d k=v'"
_bestie_args_to_copier_args(dict) = vcat([["-d"; "$k=$v"] for (k, v) in dict]...)

"Arguments for the different calls"
_bestie_args = (min = Data.strategy_minimum, ask = Data.strategy_ask_default)
args = (
  bestie = _bestie_args,
  copier = NamedTuple(
    key => _bestie_args_to_copier_args(value) for (key, value) in pairs(_bestie_args)
  ),
)

template_path = joinpath(@__DIR__, "..")
template_url = "https://github.com/abelsiqueira/BestieTemplate.jl"

end
