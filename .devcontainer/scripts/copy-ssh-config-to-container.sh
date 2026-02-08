#!/bin/bash

# Copy ssh config file to the container
cp .devcontainer/.secrets/SSH/config ~/.ssh/config

# Resolve permission errors for keys ("Permissions 0644 for 'key' are too open.")
chmod 600 .devcontainer/.secrets/KEYS/*
