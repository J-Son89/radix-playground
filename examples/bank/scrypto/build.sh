#!/bin/bash

set -x
set -e

cd "$(dirname "$0")"

(cd bank; scrypto build; cp target/wasm32-unknown-unknown/release/bank.wasm ../../public)