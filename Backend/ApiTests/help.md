To setup this test project, follow this guide:
https://learn.microsoft.com/en-us/dotnet/core/tutorials/testing-with-cli


Basically, run the following commands:
// from project root folder:
dotnet new xunit -o ApiTests

// now change into the new subproject
cd .\ApiTests\

// add project reference to root project
dotnet add reference ../Api.csproj



