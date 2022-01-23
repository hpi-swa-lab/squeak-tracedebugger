#!/usr/bin/env bash
set -e

# Download latest Trunk bundle for Linux/x64 and extract VM
wget https://files.squeak.org/nightly/Squeak-latest-64bit-Linux-x64.tar.gz
tar -zxvf Squeak-latest-64bit-Linux-x64.tar.gz --wildcards '*/bin'
echo ::set-output name=vm-path::"$(realpath Squeak*/bin/squeak)"
