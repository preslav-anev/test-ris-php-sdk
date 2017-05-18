#!/usr/bin/env bash

setup_git() {
    git config --global user.email "travis@travis-ci.org"
    git config --global user.name "Travis CI"
}

tag_master() {
    - export GIT_TAG=0.1.$TRAVIS_BUILD_NUMBER
    - echo $GIT_TAG
    - git tag -a $GIT_TAG -m 'Version $VERS'
    - git push --tags
}

setup_git
tag_master