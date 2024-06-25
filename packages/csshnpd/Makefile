include $(TOPDIR)/rules.mk

PKG_NAME:=csshnpd
PKG_VERSION:=0.1.3
PKG_RELEASE:=1

PKG_SOURCE:=$(PKG_NAME)-c$(PKG_VERSION).tar.gz
PKG_SOURCE_URL:=https://github.com/atsign-foundation/noports/releases/download/c$(PKG_VERSION)
PKG_HASH:=241e2ada4f5e131809c845dd1e75e0eb41ccf071cffc726738bc55ecd828939f

PKG_LICENSE:=BSD-3-Clause
PKG_LICENSE_FILES:=LICENCE

PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)-$(PKG_VERSION)

include $(INCLUDE_DIR)/package.mk
include $(INCLUDE_DIR)/cmake.mk

CMAKE_OPTIONS += \
		-B build \
		-S . \
		-DBUILD_SHARED_LIBS=off \
		-DCMAKE_C_COMPILER=gcc \
		-DCMAKE_C_FLAGS="-Wno-calloc-transposed-args" \
		./sshnpd/

define Package/csshnpd
	SECTION:=net
	CATEGORY:=Network
	TITLE:=NoPorts Daemon
	SELECTS:=openssh-keygen
	URL:=https://noports.com
	SUBMENU:=SSH
endef

define Package/csshnpd/description
	A small and portable daemon for NoPorts.
endef

define Package/csshnpd/install	
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/csshnpd $(1)/usr/bin/
endef

$(eval $(call BuildPackage,csshnpd))
