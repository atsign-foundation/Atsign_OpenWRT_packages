#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=at_python
PKG_VERSION:=0.0.1
PKG_RELEASE:=1

PKG_SOURCE_PROTO:=git
PKG_SOURCE_URL:=https://github.com/atsign-foundation/at_python
PKG_SOURCE_VERSION:=ffa57fea169349d63f2a9c325cbb840fc410b2e7

PKG_LICENSE:=BSD-3-Clause
PKG_LICENSE_FILES:=LICENSE
PKG_MAINTAINER:=Chris Swan <@cpswan>

PKG_BUILD_DEPENDS:=python-poetry-core/host

include $(INCLUDE_DIR)/package.mk
include $(TOPDIR)/feeds/packages/lang/python/python3-package.mk

define Package/python3-atpython
  SECTION:=lang
  CATEGORY:=Languages
  SUBMENU:=Python
  TITLE:=Python SDK for the atPlatform
  URL:=https://github.com/atsign-foundation/at_python
  DEPENDS:=\
      +python3-pip \
	  +python3-bcrypt \
	  +python3-cffi \
	  +python3-cryptography \
	  +python3-dateutil \
	  +python3-pycparser \
	  +python3-pytest \
	  +python3-requests \
	  +python3-six
endef

define Package/python3-atpython/description
The atPlatform for Python developers
endef

$(eval $(call Py3Package,python3-atpython))
$(eval $(call BuildPackage,python3-atpython))
