include $(TOPDIR)/rules.mk

PKG_NAME:=csshnpd
PKG_VERSION:=0.2.0
PKG_RELEASE:=1

PKG_SOURCE:=$(PKG_NAME)-c$(PKG_VERSION).tar.gz
PKG_SOURCE_URL:=https://github.com/atsign-foundation/noports/releases/download/c$(PKG_VERSION)
PKG_HASH:=d7df1f243871e9f646a7cc0ea33f7024bc561321e9d4d1df0f8f78ba3a6f1e36

PKG_LICENSE:=BSD-3-Clause
PKG_LICENSE_FILES:=LICENCE

PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)-c$(PKG_VERSION)

include $(INCLUDE_DIR)/package.mk
include $(INCLUDE_DIR)/cmake.mk

CMAKE_OPTIONS += \
		-S . \
		-DBUILD_SHARED_LIBS=off \
		-DBUILD_TESTS=off \
		-DCMAKE_C_COMPILER=$(TARGET_CC) \
		-DCMAKE_C_FLAGS="-Wno-calloc-transposed-args -Wno-error -pthread -lrt"

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
	$(INSTALL_DIR) \
	    $(1)/usr/bin \
		$(1)/etc/config
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/sshnpd/sshnpd $(1)/usr/bin/
	$(INSTALL_CONF) files/csshnpd.conf \
	    $(1)/etc/config/csshnpd.conf
endef

$(eval $(call BuildPackage,csshnpd))
