include $(TOPDIR)/rules.mk

PKG_NAME:=csshnpd
PKG_VERSION:=0.1.0
PKG_RELEASE:=1

PKG_TARBALL:=c$(PKG_VERSION).tar.gz
PKG_SOURCE_URL:=https://github.com/atsign-foundation/noports/archive/$(PKG_TARBALL)
PKG_HASH:=e0b8810ea2c8368fd5d8fa05b29421791c539b54

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
		-DCMAKE_C_FLAGS="-Wno-calloc-transposed-args"

define Package/csshnpd
	SECTION:=net
	CATEGORY:=Network
	DEPENDS:=openssh-keygen
	TITLE:=NoPorts Daemon
	URL:=https://noports.com
	SUBMENU:=SSH
endef

define Package/csshnpd/description
	A small and portable daemon for NoPorts.
endef

define Build/Prepare
	mkdir -p $(PKG_BUILD_DIR)
	$(CP) ./src/* $(PKG_BUILD_DIR)/
endef

define Package/csshnpd/install	
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/athellocmake $(1)/usr/bin/
endef

$(eval $(call BuildPackage,csshnpd))
