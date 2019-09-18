<!DOCTYPE html>
<?php $settings = require('resources/settings.php'); ?>

<?php /* start lighthouse */ ?>
<html lang="en" class="no-module">
<meta charset="utf-8">
<title><?= $this->e((!empty($title) ? $title . ' - ' : '') . $settings->title); ?></title>
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<link rel="manifest" href="/manifest.webmanifest">
<meta name="theme-color" content="#000000">
<meta name="description" content="<?= $this->e(!empty($description) ? $description : $settings->description); ?>">
<?php /* end lighthouse */ ?>

<style id="blank-css"><?= file_get_contents('https://slogsdon.github.io/blank/blank.css') ?></style>
<style>
    a {
        color: #000;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    .container {
        margin: 0 auto;
        max-width: 650px;
        padding: 0 1rem;
    }
    .container > header {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
    }
    .menu {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .menu-item {
        display: inline;
        margin-left: 0.5rem;
    }
    .index-page.menu-container .menu-item {
        font-size: 1.5rem;
        margin-left: 0;
        margin-right: 0.75rem;
    }
    .footer.menu-container {
        border-top: 1px solid #e9e9e9;
        margin-top: 1.5rem;
        padding: 3rem 0;
    }
    .footer.menu-item {
        display: inline-block;
        margin: 0;
        margin-right: 1.5rem;
    }
    .footer.menu-link {
        color: #727272;
    }
</style>
<style id="hljs-atom-one-light">
    /*
    Atom One Light by Daniel Gamage
    Original One Light Syntax theme from https://github.com/atom/one-light-syntax
    base:    #fafafa
    mono-1:  #383a42
    mono-2:  #686b77
    mono-3:  #a0a1a7
    hue-1:   #0184bb
    hue-2:   #4078f2
    hue-3:   #a626a4
    hue-4:   #50a14f
    hue-5:   #e45649
    hue-5-2: #c91243
    hue-6:   #986801
    hue-6-2: #c18401
    */

    .hljs {
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        color: #383a42;
        background: #fafafa;
    }

    .hljs-comment,
    .hljs-quote {
        color: #a0a1a7;
        font-style: italic;
    }

    .hljs-doctag,
    .hljs-keyword,
    .hljs-formula {
        color: #a626a4;
    }

    .hljs-section,
    .hljs-name,
    .hljs-selector-tag,
    .hljs-deletion,
    .hljs-subst {
        color: #e45649;
    }

    .hljs-literal {
        color: #0184bb;
    }

    .hljs-string,
    .hljs-regexp,
    .hljs-addition,
    .hljs-attribute,
    .hljs-meta-string {
        color: #50a14f;
    }

    .hljs-built_in,
    .hljs-class .hljs-title {
        color: #c18401;
    }

    .hljs-attr,
    .hljs-variable,
    .hljs-template-variable,
    .hljs-type,
    .hljs-selector-class,
    .hljs-selector-attr,
    .hljs-selector-pseudo,
    .hljs-number {
        color: #986801;
    }

    .hljs-symbol,
    .hljs-bullet,
    .hljs-link,
    .hljs-meta,
    .hljs-selector-id,
    .hljs-title {
        color: #4078f2;
    }

    .hljs-emphasis {
        font-style: italic;
    }

    .hljs-strong {
        font-weight: bold;
    }

    .hljs-link {
        text-decoration: underline;
    }
</style>

<?php /* start content */ ?>
<?= $this->section('content'); ?>
<?php /* end content */ ?>

<?php /* start scripts */ ?>
<script type="module">
    document.getElementsByTagName('html')[0]
        .classList.remove('no-module');
</script>
<script>
    ('serviceWorker' in navigator)
        && navigator.serviceWorker
            .register('/sw.js')
            .catch(() => {});
</script>
<?php /* end scripts */ ?>
