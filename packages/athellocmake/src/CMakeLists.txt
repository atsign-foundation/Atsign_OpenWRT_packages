cmake_minimum_required(VERSION 3.1...3.27)
 
project(
  athellocmake
  VERSION 1.0
  LANGUAGES C)
 
add_executable(athellocmake main.c)
install(TARGETS athellocmake DESTINATION /usr/bin)