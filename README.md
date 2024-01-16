<img width=250px src="https://atsign.dev/assets/img/atPlatform_logo_gray.svg?sanitize=true">

# Atsign OpenWRT packages

This repo contains the source code to build packages for
[OpenWRT](https://openwrt.org/), a Linux operating system targeting embedded
devices.

OpenWRT is very popular with device manufacturers, and we want to make it
easy to run our stuff there.

## Packages

### lang/python/python-atsdk

This package contains our
[Python SDK](https://github.com/atsign-foundation/at_python)

### lang/python/python-sshnpd

This package contains our
[Python NoPorts daemon](https://github.com/atsign-foundation/noports/tree/trunk/packages/python/sshnpd)

## Development Environment Setup

Please start by setting up an OpenWRT toolchain following the steps in their
[Developer guide](https://openwrt.org/docs/guide-developer/start)

If you've got past
["Hello World!" for OpenWRT](https://openwrt.org/docs/guide-developer/helloworld/start)
then you're ready to use this.

### Using this repo as a feed

First clone this repo from GitHub.

Then create a `feeds.conf` in the root of the OpenWRT build tree e.g.:

```
src-link atsign /home/chris/git/github.com/atsign-foundation/Atsign_OpenWRT_packages/packages
```

You'll need to change `/home/chris/git/github.com/atsign-foundation/`
to wherever you cloned this repo.

## Contributor

If you'd like to add, modify or improve what's here then please take a look at
[CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidance on how to make a pull
request.

## Maintainers

Created by [@cpswan](https://github.com/cpswan)
