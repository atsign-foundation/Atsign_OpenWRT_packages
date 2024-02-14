include $(TOPDIR)/rules.mk
 
PKG_NAME:=athellocmake
PKG_VERSION:=0.1
PKG_RELEASE:=1
 
#SOURCE_DIR:=/media/workspace/packages/cmakepackages/hellocmake
PKG_BUILD_DIR:=$(BUILD_DIR)/athellocmake-$(PKG_VERSION)
 
include $(INCLUDE_DIR)/package.mk
include $(INCLUDE_DIR)/cmake.mk
 
define Package/athellocmake
	CATEGORY:=custom
	TITLE:=Simple Cmake package
	#DEPENDS:=+libstdcpp +ixwebsocket +libatomic
endef
 
define Package/athellocmake/description
	athellocmake is a simple application to demonstrate OpenWRT build system with cmake packages
endef
 
define Package/athellocmake/install	
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/athellocmake $(1)/usr/bin/
endef
 
$(eval $(call BuildPackage,athellocmake))