FROM php:8.3.0-apache-bookworm

# Update and install dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential \
    git \
    apache2 \
    gphoto2 \
    libimage-exiftool-perl \
    rsync \
    udisks2 \
    python3 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN apt-get update && apt-get install -y  \
    libzip-dev zip \
    zlib1g-dev \
    libjpeg-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    libpng-dev

RUN docker-php-ext-install zip
RUN docker-php-ext-configure gd --with-freetype --with-jpeg  && docker-php-ext-install -j "$(nproc)" gd

# Install Nodejs
# https://github.com/nodesource/distributions#debian-versions
RUN apt-get update &&\
    apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    nano \
    gnupg && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - &&\
    apt-get install -y --no-install-recommends nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*


# Copy files
WORKDIR /var/www/html
COPY . .

# Install and build
RUN git config --global --add safe.directory '*'
RUN git submodule update --init

#RUN npm install
RUN npm ci
RUN npm run build

RUN chown -R www-data:www-data /var/www/html
