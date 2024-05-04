/* eslint-disable no-undef */
Package.describe({
    name: 'socialize:friendships',
    summary: 'A social friendship package',
    version: '2.0.0',
    git: 'https://github.com/copleykj/socialize-friendships.git',
});

Package.onUse(function _(api) {
    api.versionsFrom(['2.8.1']);

    api.use([
        'check',
        'reywood:publish-composite@1.8.9',
        'socialize:user-blocking@2.0.0',
        'socialize:requestable@2.0.0',
        'aldeed:simple-schema@1.13.1'
    ]);

    api.imply('socialize:user-blocking');

    api.mainModule('server/server.js', 'server');
    api.mainModule('common/common.js', 'client');
});
