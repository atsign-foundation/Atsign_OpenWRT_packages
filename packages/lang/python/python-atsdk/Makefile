#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=atsdk
PKG_VERSION:=0.2.0
PKG_RELEASE:=1

PYPI_NAME:=atsdk
PKG_HASH:=52f4b56597bdc25725b6e1cf9842800b4194def8b2691d0e9c0bb393f97a486e

PKG_LICENSE:=BSD-3-Clause
PKG_LICENSE_FILES:=LICENSE
PKG_MAINTAINER:=Chris Swan <@cpswan>

include $(INCLUDE_DIR)/package.mk
include $(TOPDIR)/feeds/packages/lang/python/python3-package.mk

define Package/python3-atpython
  SECTION:=lang
  CATEGORY:=Languages
  SUBMENU:=Python
  TITLE:=Python SDK for the atPlatform
  URL:=https://github.com/atsign-foundation/at_python
  DEPENDS:=\
      +python3-light \
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
$(eval $(call BuildPackage,python3-atpython-src))
