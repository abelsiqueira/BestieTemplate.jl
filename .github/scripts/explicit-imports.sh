#!/bin/bash

module=$1

# Check that $module is not empty
if [ -z "$module" ]; then
  echo "Module was not passed. 'args: [Module]' should be included in the pre-commit config"
fi

julia -e "
  using Pkg
  pkg\"activate\"

  using ExplicitImports: ExplicitImports
  pkg\"activate .\"

  using $module
  ExplicitImports.check_all_explicit_imports_are_public($module)
  # ExplicitImports.check_all_qualified_accesses_are_public($module) # disabled due to #471
  ExplicitImports.check_all_explicit_imports_via_owners($module)
  ExplicitImports.check_all_qualified_accesses_via_owners($module)
  ExplicitImports.check_no_implicit_imports($module)
  ExplicitImports.check_no_self_qualified_accesses($module)
  ExplicitImports.check_no_stale_explicit_imports($module)
"
