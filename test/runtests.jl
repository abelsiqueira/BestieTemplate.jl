using COPIERTemplate
using Test

template_options = Dict(
  "PackageName" => "Tmp",
  "PackageUUID" => "1234",
  "PackageOwner" => "test",
  "AuthorName" => "Test",
  "AuthorEmail" => "test@me.now",
  "JuliaMinVersion" => "1.6",
  "License" => "MIT",
  "AddMacToCI" => true,
  "AddWinToCI" => true,
  "RunJuliaNightlyOnCI" => true,
  "UseCirrusCI" => true,
)

@testset "Compare folder generated by this call vs direct copier" begin
  tmpdir1 = mktempdir()
  tmpdir2 = mktempdir()

  COPIERTemplate.generate(tmpdir1; data = template_options)
  bash_args = vcat([["-d"; "$k=$v"] for (k, v) in template_options]...)
  run(`copier copy $bash_args https://github.com/abelsiqueira/COPIERTemplate.jl $tmpdir2`)
  for (root, dirs, files) in walkdir(tmpdir1)
    for file in files
      file1 = joinpath(root, file)
      file2 = replace(file1, tmpdir1 => tmpdir2)
      lines1 = readlines(file1)
      lines2 = readlines(file2)
      diff = ["$line1 vs $line2" for (line1, line2) in zip(lines1, lines2) if line1 != line2]
      @test diff == []
    end
  end
end
