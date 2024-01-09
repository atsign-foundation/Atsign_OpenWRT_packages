#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=sshnpd
PKG_VERSION:=0.4.1
PKG_RELEASE:=1

PYPI_NAME:=sshnpd
PKG_HASH:=3bb3bd1f00409598b2b7e8c70eb3acdb81c614224f64671d47b2c53a19dab1a4

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
