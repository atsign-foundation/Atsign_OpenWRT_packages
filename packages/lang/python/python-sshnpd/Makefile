#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=sshnpd
PKG_VERSION:=0.4.2
PKG_RELEASE:=1

PYPI_NAME:=sshnpd
PKG_HASH:=b8c62a65e9c76bc1a98bd300784781abacb7451aefe052e396056c99f4d6a7dd

PKG_LICENSE:=BSD-3-Clause
PKG_LICENSE_FILES:=LICENSE
PKG_MAINTAINER:=Chris Swan <@cpswan>

include $(TOPDIR)/feeds/packages/lang/python/pypi.mk
include $(INCLUDE_DIR)/package.mk
include $(TOPDIR)/feeds/packages/lang/python/python3-package.mk

define Package/python3-sshnpd
  SECTION:=lang
  CATEGORY:=Languages
  SUBMENU:=Python
  TITLE:=Python SDK for the atPlatform
  URL:=https://github.com/atsign-foundation/at_python
  DEPENDS:=\
      +python3-light \
      +python3-atsdk \
      +python3-bcrypt \
      +python3-cffi \
      +python3-cryptography \
      +python3-paramiko \
      +python3-pycparser \
      +python3-pynacl
endef

define Package/python3-sshnpd/description
Atsign SSH No Ports daemon in Python
endef

$(eval $(call Py3Package,python3-sshnpd))
$(eval $(call BuildPackage,python3-sshnpd))
$(eval $(call BuildPackage,python3-sshnpd-src))
