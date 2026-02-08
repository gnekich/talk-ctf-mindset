#!/bin/bash

cp /scripts/.zshrc ~
cp /scripts/.p10k.zsh ~

zsh -c "source ~/.zshrc"

# We want to fetch gitstatusd before we complete building an image
# [powerlevel10k] fetching gitstatusd .. [ok]  
# Ref: https://github.com/romkatv/powerlevel10k/issues/747
echo exit | script -qec zsh /dev/null >/dev/null

