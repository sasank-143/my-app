module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/sasank-143/my-app",
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/github'

    ]
}