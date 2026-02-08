#!/bin/bash

# Google Cloud SDK version
VERSION="484.0.0"
BASE_URL="https://dl.google.com/dl/cloudsdk/channels/rapid/downloads"

# Detect architecture and OS
ARCH=$(uname -m)
OS=$(uname -s | tr '[:upper:]' '[:lower:]')

# Map architecture to the binary name
case "$ARCH" in
    x86_64)
        if [ "$OS" = "linux" ]; then
            BINARY="google-cloud-cli-${VERSION}-linux-x86_64.tar.gz"
        elif [ "$OS" = "darwin" ]; then
            BINARY="google-cloud-cli-${VERSION}-darwin-x86_64.tar.gz"
        fi
        ;;
    arm64|aarch64)
        if [ "$OS" = "linux" ]; then
            BINARY="google-cloud-cli-${VERSION}-linux-arm.tar.gz"
        elif [ "$OS" = "darwin" ]; then
            BINARY="google-cloud-cli-${VERSION}-darwin-arm.tar.gz"
        fi
        ;;
    *)
        echo "Unsupported architecture: $ARCH"
        exit 1
        ;;
esac

if [ -z "$BINARY" ]; then
    echo "Unsupported OS/architecture combination: $OS/$ARCH"
    exit 1
fi

echo "Downloading Google Cloud SDK for $OS/$ARCH..."

# Download and extract
curl "$BASE_URL/$BINARY" -o gcloud-sdk.tar.gz
tar -xzf gcloud-sdk.tar.gz

# Move to /opt and create symlinks
mv google-cloud-sdk /opt/
ln -s /opt/google-cloud-sdk/bin/gcloud /usr/local/bin/gcloud
ln -s /opt/google-cloud-sdk/bin/gsutil /usr/local/bin/gsutil
ln -s /opt/google-cloud-sdk/bin/bq /usr/local/bin/bq

# Clean up
rm gcloud-sdk.tar.gz

# Make sure the binaries are executable
chmod +x /opt/google-cloud-sdk/bin/*

echo "Google Cloud SDK installed successfully"

# Verify installation
gcloud version