This is a demonstration package of how one can use composer for building and
distributing Javascript packages. The [implementation demo is here](https://github.com/programster/js-demo-welcomer-implementation).

## Installation / Usage
In order to use these packages, one will need to use composer require/install
the package as usual:

```bash
composer require programster/js-demo-welcomer
```

However, yout then probably want to add the following
scripts section to  your composer.json file in order to have the package
automatically install the source code to the `public_html/js` folder.
Obviously if you want the sourceelsewhere, you would just update the paths
accordingly.

One has to manually add the scripts section themselves because the scripts of
the packages themselves are not automatically executed (probably for security).
Only the scripts in the root composer.json file are executed.

```json
{
    "require": {
        "programster/js-demo-welcomer": "0.1.*"
    },
    "scripts": {
        "post-install-cmd": [
            "rm -f public_html/js/js-demo-welcomer && ln -s ../../vendor/programster/js-demo-welcomer/src public_html/js/js-demo-welcomer"
        ],
        "post-update-cmd": [
            "rm -f public_html/js/js-demo-welcomer && ln -s ../../vendor/programster/js-demo-welcomer/src public_html/js/js-demo-welcomer"
        ]
    }
}
```

For this package, a full example composer.json file would be as follows:

```json
{
    "require": {
        "programster/js-demo-welcomer": "0.1.*"
    },
    "scripts": {
        "post-install-cmd": [
            "rm -f public_html/js/js-demo-welcomer && ln -s ../../vendor/programster/js-demo-welcomer/src public_html/js/js-demo-welcomer"
        ],
        "post-update-cmd": [
            "rm -f public_html/js/js-demo-welcomer && ln -s ../../vendor/programster/js-demo-welcomer/src public_html/js/js-demo-welcomer"
        ]
    }
}
```

Then you would use this package like so in your source code:

```html
...
<body>
<script src="js/js-demo-welcomer/Welcomer.js"></script>
<script type="text/javascript">
    var welcomer = new Welcomer("James");
    welcomer.run();
</script>
...
```
