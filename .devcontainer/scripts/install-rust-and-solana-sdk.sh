#!/bin/bash

# Install prerequisites
sudo apt-get install -y \
    build-essential \
    pkg-config \
    libudev-dev llvm libclang-dev \
    protobuf-compiler libssl-dev

# Install rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

# Prepending path in case a system-installed rustc needs to be overridden
#export PATH="$HOME/.cargo/bin:$PATH"
echo -e "\n\nexport PATH=\"\$HOME/.cargo/bin:\$PATH\"" >> ~/.zshrc


## Install rust and solana-cli (This won't work on linux arm64)
#curl --proto '=https' --tlsv1.2 -sSfL https://solana-install.solana.workers.dev | bash

# Fix for linux arm64 by downloading prebuilt binaries
ARCH=$(uname -m)
VERSION="3.1.5"

case "$ARCH" in
    x86_64)
    BINARY="solana-release-x86_64-unknown-linux-gnu.tar.bz2"
    ;;
    arm64|aarch64)
    BINARY="solana-release-aarch64-unknown-linux-gnu.tar.bz2"
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

# Download build for arm64
wget https://github.com/gnekich/agave-dist/releases/download/v$VERSION/$BINARY

# Extract to /usr/local
tar xjf $BINARY

#echo -e "\n\nexport PATH=\"$HOME/.local/share/solana/install/active_release/bin:$PATH\"" >> ~/.zshrc

echo -e "\n\nexport PATH=\"/solana-release/bin:\$PATH\"" >> ~/.zshrc
