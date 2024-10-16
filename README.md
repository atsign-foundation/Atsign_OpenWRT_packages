<a href="https://atsign.com#gh-light-mode-only"><img width=250px src="https://atsign.com/wp-content/uploads/2022/05/atsign-logo-horizontal-color2022.svg#gh-light-mode-only" alt="The Atsign Foundation"></a><a href="https://atsign.com#gh-dark-mode-only"><img width=250px src="https://atsign.com/wp-content/uploads/2023/08/atsign-logo-horizontal-reverse2022-Color.svg#gh-dark-mode-only" alt="The Atsign Foundation"></a>

# Atsign OpenWRT packages

This repo contains the source code to build packages for
[OpenWRT](https://openwrt.org/), a Linux operating system targeting embedded
devices.

OpenWRT is very popular with device manufacturers, and we want to make it
easy to run our stuff there.

## Packages

### csshnpd

This package contains our
[C NoPorts daemon](https://github.com/atsign-foundation/noports/tree/trunk/packages/c/sshnpd)

#### Installing csshnpd

Once a .ipk file has been created (e.g. `csshnpd_0.2.0-1_x86_64.ipk`) it
should be copied to the target OpenWRT system and installed with `opkg`:

```sh
opkg install csshnpd_0.2.0-1_x86_64.ipk
```

NB that command line will vary according to version and platform architecture.

#### Configuring sshnpd

The config is held in `/etc/config/sshnpd`

Use your favourite editor to set `atsign`, `manager` and `device` to the
atSigns and name you wish to use.

`enabled` needs to be changed to `1`

#### Getting atSign keys in place

sshnpd expect to find keys in `$HOME/.atsign/keys`. For now keys need to be
activated elsewhere and copied into an `@atsign__key.atKeys` file (where
`atsign` is replaced with the atSign being used for the device).

#### Starting the daemon

Run:

```sh
/etc/init.d/sshnpd start
```

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

## Old packages

### python packages

We previously packaged the Python3 atSDK and sshnpd in:

* lang/python/python-atsdk
* lang/python/python-sshnpd

These have been removed to prevent conflicts with older build tool chains.
The branch
[python3-packages](https://github.com/atsign-foundation/Atsign_OpenWRT_packages/tree/python3-packages)
holds those packages as they were.

## Contributor

If you'd like to add, modify or improve what's here then please take a look at
[CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidance on how to make a pull
request.

## Maintainers

Created by [@cpswan](https://github.com/cpswan)
