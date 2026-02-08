#!/bin/bash

# Cloud SQL Proxy version
VERSION="v2.18.1"
BASE_URL="https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/$VERSION"

# Detect architecture
ARCH=$(uname -m)
OS=$(uname -s | tr '[:upper:]' '[:lower:]')

# Map architecture to the binary name
case "$ARCH" in
    x86_64)
        if [ "$OS" = "linux" ]; then
            BINARY="cloud-sql-proxy.linux.amd64"
        elif [ "$OS" = "darwin" ]; then
            BINARY="cloud-sql-proxy.darwin.amd64"
        fi
        ;;
    arm64|aarch64)
        if [ "$OS" = "linux" ]; then
            BINARY="cloud-sql-proxy.linux.arm64"
        elif [ "$OS" = "darwin" ]; then
            BINARY="cloud-sql-proxy.darwin.arm64"
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

echo "Downloading Cloud SQL Proxy for $OS/$ARCH..."
curl "$BASE_URL/$BINARY" -o cloud-sql-proxy

chmod +x cloud-sql-proxy

echo "Cloud SQL Proxy installed successfully"

# Create the /cloudsql directory if it doesn't exist
[ -d /cloudsql ] || mkdir /cloudsql
