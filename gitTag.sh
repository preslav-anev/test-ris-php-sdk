#!/usr/bin/env bash

setup_git() {
    git config --global user.email "travis@travis-ci.org"
    git config --global user.name "Travis CI"
}

tag_master() {
     if [ -n "$GH_TOKEN" ]; then $GH_TOKEN; fi;
     export GIT_TAG=0.1.$TRAVIS_BUILD_NUMBER
     echo $GIT_TAG
     git tag -a $GIT_TAG -m 'Version $GIT_TAG'
     git push --quiet https://$GH_TOKEN@github.com/preslav-anev/test-ris-php-sdk.git --tags
}

setup_git
tag_master