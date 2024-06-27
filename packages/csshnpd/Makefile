include $(TOPDIR)/rules.mk

PKG_NAME:=csshnpd
PKG_VERSION:=0.1.6
PKG_RELEASE:=1

PKG_SOURCE:=$(PKG_NAME)-c$(PKG_VERSION).tar.gz
PKG_SOURCE_URL:=https://github.com/atsign-foundation/noports/releases/download/c$(PKG_VERSION)
PKG_HASH:=40965081365a432538fac894fe8d142dcf91de528a8ec1fb261ebfebf493488c

PKG_LICENSE:=BSD-3-Clause
PKG_LICENSE_FILES:=LICENCE

PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)-c$(PKG_VERSION)

include $(INCLUDE_DIR)/package.mk
include $(INCLUDE_DIR)/cmake.mk

CMAKE_OPTIONS += \
		-S . \
		-DBUILD_SHARED_LIBS=off \
		-DCMAKE_C_COMPILER=gcc \
		-DCMAKE_C_FLAGS="-Wno-calloc-transposed-args"

define Package/csshnpd
	SECTION:=net
	CATEGORY:=Network
	TITLE:=NoPorts Daemon
	URL:=https://noports.com
	SUBMENU:=SSH
endef

define Package/csshnpd/description
	A small and portable daemon for NoPorts.
endef

define Package/csshnpd/install	
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/sshnpd/sshnpd $(1)/usr/bin/
endef

$(eval $(call BuildPackage,csshnpd))
