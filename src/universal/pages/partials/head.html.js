import React from 'react';

const Head = ({ title }) => (
    <head>
        <meta charSet='utf-8' />
        <title>{title}</title>
        <script>
            alert(\'hello\')\;
        </script>
        <meta name='description' content='' />
        <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet' />
        <link href='css/main.css' rel='stylesheet' />
        <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no' />
    </head>
)

Head.propTypes = {
    title: React.PropTypes.string.isRequired,
};

export default Head
