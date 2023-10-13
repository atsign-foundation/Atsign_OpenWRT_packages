#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=sshnpdpy
PKG_VERSION:=0.0.1
PKG_RELEASE:=1

PKG_SOURCE_PROTO:=git
PKG_SOURCE_URL:=https://github.com/atsign-foundation/sshnoports
PKG_SOURCE_VERSION:=074699a29e31688dcba8b79fd55433e25c68355e

PYTHON3_PKG_SETUP_DIR=packages/sshnpdpy

PKG_LICENSE:=BSD-3-Clause
PKG_LICENSE_FILES:=LICENSE
PKG_MAINTAINER:=Chris Swan <@cpswan>

include $(INCLUDE_DIR)/package.mk
include $(TOPDIR)/feeds/packages/lang/python/python3-package.mk

define Package/python3-sshnpdpy
  SECTION:=lang
  CATEGORY:=Languages
  SUBMENU:=Python
  TITLE:=Python SDK for the atPlatform
  URL:=https://github.com/atsign-foundation/at_python
  DEPENDS:=\
      +python3-light \
      +python3-atpython \
	  +python3-bcrypt \
	  +python3-cffi \
	  +python3-cryptography \
	  +python3-paramiko \
	  +python3-pycparser \
	  +python3-pynacl
endef

define Package/python3-sshnpdpy/description
Atsign SSH No Ports daemon in Python
endef

$(eval $(call Py3Package,python3-sshnpdpy))
$(eval $(call BuildPackage,python3-sshnpdpy))
$(eval $(call BuildPackage,python3-sshnpdpy-src))
