ARG VARIANT=24-bookworm
FROM node:${VARIANT}

ARG USERNAME=node
ARG NPM_GLOBAL=/usr/local/share/npm-global

# Add NPM global to PATH.
ENV PATH=${NPM_GLOBAL}/bin:${PATH}

RUN \
    # Configure global npm install location, use group to adapt to UID/GID changes
    if ! cat /etc/group | grep -e "^npm:" > /dev/null 2>&1; then groupadd -r npm; fi \
    && usermod -a -G npm ${USERNAME} \
    && umask 0002 \
    && mkdir -p ${NPM_GLOBAL} \
    && touch /usr/local/etc/npmrc \
    && chown ${USERNAME}:npm ${NPM_GLOBAL} /usr/local/etc/npmrc \
    && chmod g+s ${NPM_GLOBAL} \
    && npm config -g set prefix ${NPM_GLOBAL} \
    && su ${USERNAME} -c "npm config -g set prefix ${NPM_GLOBAL}" \
    # Install eslint
    && su ${USERNAME} -c "umask 0002 && npm install -g eslint" \
    && npm cache clean --force > /dev/null 2>&1

# Add ZSH and install Oh My Zsh
RUN \
    apt-get update && apt-get install -y zsh \
    && chsh -s /usr/bin/zsh ${USERNAME}

RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Add Powerlevel10k theme and copy dotfiles
RUN zsh -c 'git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k'

COPY dotfiles/.zshrc /scripts/.zshrc
COPY dotfiles/.p10k.zsh /scripts/.p10k.zsh
COPY scripts/copy-config-dotfiles.sh /scripts/copy-config-dotfiles.sh
RUN \
    chmod +x /scripts/copy-config-dotfiles.sh \
    && /scripts/copy-config-dotfiles.sh

# Fix for gitstatus to be downloaded into image, because it is used in Powerlevel10k
RUN zsh -c "source ~/.zshrc"

# Add Hasura CLI
RUN \
    curl -L https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh | VERSION=v2.48.6 bash

COPY scripts/install-google-cloud-proxy.sh /scripts/install-google-cloud-proxy.sh
COPY scripts/install-google-cloud-sdk.sh /scripts/install-google-cloud-sdk.sh

# Install Cloud SQL Proxy
RUN \
    chmod +x /scripts/install-google-cloud-proxy.sh \
    && /scripts/install-google-cloud-proxy.sh

# Install Google Cloud SDK
RUN \
    chmod +x /scripts/install-google-cloud-sdk.sh \
    && /scripts/install-google-cloud-sdk.sh

COPY scripts/install-rust-and-solana-sdk.sh /scripts/install-rust-and-solana-sdk.sh

# Install rust and solana-cli
RUN \
    chmod +x /scripts/install-rust-and-solana-sdk.sh \
    && /scripts/install-rust-and-solana-sdk.sh