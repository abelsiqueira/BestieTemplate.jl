var documenterSearchIndex = {"docs":
[{"location":"contributing/#Contributing-guidelines","page":"Contributing","title":"Contributing guidelines","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"First of all, thanks for the interest!","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"We welcome all kinds of contribution, including, but not limited to code, documentation, examples, configuration, issue creating, etc.","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"Be polite and respectful.","category":"page"},{"location":"contributing/#Bug-reports-and-discussions","page":"Contributing","title":"Bug reports and discussions","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"If you think you found a bug, feel free to open an issue. Focused suggestions and requests can also be opened as issues. Before opening a pull request, start an issue or a discussion on the topic, please.","category":"page"},{"location":"contributing/#Working-on-an-issue","page":"Contributing","title":"Working on an issue","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"If you found an issue that interests you, comment on that issue what your plans are. If the solution to the issue is clear, you can immediately create a pull request (see below). Otherwise, say what your proposed solution is and wait for a discussion around it.","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"tipFeel free to ping us after a few days if there are no responses.","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"If your solution involves code (or something that requires running the package locally), check the developer documentation. Otherwise, you can use the GitHub interface directly to create your pull request.","category":"page"},{"location":"developer/#Developer-documentation","page":"Dev setup","title":"Developer documentation","text":"","category":"section"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"If you haven't, please read the Contributing guidelindes first.","category":"page"},{"location":"developer/#Linting-and-formatting","page":"Dev setup","title":"Linting and formatting","text":"","category":"section"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"Install a plugin on your editor to use EditorConfig. This will ensure that your editor is configured with important formatting settings.","category":"page"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"We use https://pre-commit.com to run the linters and formatters. In particular, the Julia code is formatted using JuliaFormatter.jl, so please install it globally first.","category":"page"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"Install pre-commit (we recommend using pipx):","category":"page"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"# Install pipx following the link\npipx install pre-commit","category":"page"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"With pre-commit installed, activate it as a pre-commit hook:","category":"page"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"pre-commit install","category":"page"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"To run the linting and formatting manually, enter the command below:","category":"page"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"pre-commit run -a","category":"page"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"Now, you can only commit if all the pre-commit tests pass.","category":"page"},{"location":"developer/#First-time-clone","page":"Dev setup","title":"First time clone","text":"","category":"section"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"Fork this repo\nClone your repo (this will create a git remote called origin)\nAdd this repo as a remote git remote add orgremote https://github.com/abelsiqueira/COPIERTemplate.jl","category":"page"},{"location":"developer/#Working-on-a-new-issue","page":"Dev setup","title":"Working on a new issue","text":"","category":"section"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"Fetch from the JSO remote and fast-forward your local main\ngit fetch orgremote\ngit switch main\ngit merge --ff-only orgremote/main\nBranch from main to address the issue (see below for naming)\ngit switch -c 42-add-answer-universe\nPush the new local branch to your personal remote repository\ngit push -u origin 42-add-answer-universe\nCreate a pull request to merge your remote branch into the org main.","category":"page"},{"location":"developer/#Branch-naming","page":"Dev setup","title":"Branch naming","text":"","category":"section"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"If there is an associated issue, add the issue number.\nIf there is no associated issue, and the changes are small, add a prefix such as \"typo\", \"hotfix\", \"small-refactor\", according to the type of update.\nIf the changes are not small and there is no associated issue, then create the issue first, so we can properly discuss the changes.\nUse dash separated imperative wording related to the issue (e.g., 14-add-tests, 15-fix-model, 16-remove-obsolete-files).","category":"page"},{"location":"developer/#Commit-message","page":"Dev setup","title":"Commit message","text":"","category":"section"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"Use imperative, present tense (Add feature, Fix bug)\nHave informative titles\nIf necessary, add a body with details","category":"page"},{"location":"developer/#Before-creating-a-pull-request","page":"Dev setup","title":"Before creating a pull request","text":"","category":"section"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"[Advanced] Try to create \"atomic git commits\" (recommended reading: The Utopic Git History).\nMake sure the tests pass.\nMake sure the pre-commit tests pass.\nFetch any main updates from upstream and rebase your branch, if necessary:\nbash  git fetch orgremote  git rebase orgremote/main BRANCH_NAME\nThen you can open a pull request and work with the reviewer to address any issues","category":"page"},{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/#Contents","page":"Reference","title":"Contents","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/#Index","page":"Reference","title":"Index","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [COPIERTemplate]","category":"page"},{"location":"reference/#COPIERTemplate.generate","page":"Reference","title":"COPIERTemplate.generate","text":"generate(path, generate_missing_uuid = true; kwargs...)\n\nRuns the copy command of copier with the COPIERTemplate template. Even though the template is available offline through this template, this uses the github URL to allow updating.\n\nThe keyword arguments are passed directly to the run_copy function of copier. If generate_missing_uuid is true and there is no kwargs[:data][\"PackageUUID\"], then a UUID is generated for the package.\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = COPIERTemplate","category":"page"},{"location":"#COPIERTemplate","page":"Home","title":"COPIERTemplate","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for COPIERTemplate.","category":"page"}]
}
