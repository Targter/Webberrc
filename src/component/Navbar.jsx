"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Button = ({
  title,
  leftIcon,
  rightIcon,
  containerClass = "",
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`group relative overflow-hidden px-2 sm:px-3 md:px-4 py-1.5 text-xs sm:text-sm font-medium transition-all duration-300 ${containerClass}`}
  >
    {leftIcon}
    <span className="relative inline-flex overflow-hidden tracking-wide">
      <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[160%] group-hover:skew-y-12">
        {title}
      </div>
      <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
        {title}
      </div>
    </span>
    {rightIcon}
  </button>
);

const handleContactClick = () => {
  window.location.href = "mailto:mahindersehgl@webberec.com";
};

const ElectricChipNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState(null);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState(null);
  const [activeDesktopSubDropdown, setActiveDesktopSubDropdown] =
    useState(null);
  const [hasLaunched, setHasLaunched] = useState(false);
  const mobileMenuRef = useRef(null);
  const desktopDropdownRef = useRef(null);

  const navItems = [
    { name: "Home", hasDropdown: false, link: "/" },
    {
      name: "Products",
      hasDropdown: true,
      items: [
        {
          type: "Battery Management System",
          hasSubDropdown: true,
          chips: [
            {
              id: "bms-1",
              name: "WBMS-SW-32S Contactor",
              description: "For standalone & stackable architectures",
              category: "low",
              documentUrl: "/pdata/WBMS-SW-32S-Contactor v3.0 (1).pdf",
            },
            {
              id: "bms-2",
              name: "WBMS-SWLT 20S 60A",
              description: "For onroad & battery safety",
              category: "low",
              documentUrl: "/pdata/WBMS-SWLT-20S-60A v3.0 (1).pdf",
            },
            {
              id: "bms-3",
              name: "WBMS-SWLT 16S 100A",
              description: "For cost-competitive mobility applications",
              category: "low",
              documentUrl: "/pdata/WBMS-SWLT-16S-100A v3.0 (1).pdf",
            },
            {
              id: "bms-4",
              name: "WBMS-SW-16S Contractor",
              description: "For cost-competitive mobility applications",
              category: "low",
              documentUrl: "/pdata/WBMS-SWLT 16S 100A.pdf",
            },
            {
              id: "bms-5",
              name: "WBMS-SW 16S 60/80A",
              description: "For cost-competitive mobility applications",
              category: "low",
              documentUrl: "/pdata/WBMS-SW-16S-60A-80A v3.0 (1).pdf",
            },
          ],
        },
        {
          type: "Upcoming Projects",
          hasSubDropdown: false,
        },
      ],
    },
    { name: "About Us", hasDropdown: false, link: "/About-us" },
    { name: "Media", hasDropdown: false, link: "/Media" },
  ];

  // Enhanced download function
  const handleDownload = async (documentUrl, fileName) => {
    console.log("Download initiated for:", documentUrl);

    try {
      const link = document.createElement("a");
      const fullUrl = documentUrl.startsWith("http")
        ? documentUrl
        : `${window.location.origin}${documentUrl}`;

      link.href = fullUrl;
      link.download =
        fileName || documentUrl.split("/").pop() || "document.pdf";
      link.style.display = "none";

      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        if (document.body.contains(link)) {
          document.body.removeChild(link);
        }
      }, 100);

      console.log("Download initiated successfully");
    } catch (error) {
      console.error("Download failed:", error);
      window.open(documentUrl, "_blank");
    }
  };

  // Handle product click - redirect to /Products
  const handleProductClick = (Productid) => {
    window.location.href = `/Products/${Productid}`;
  };


  // First launch effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLaunched(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY < 10) {
        setIsTransparent(false);
      } else if (currentScrollY < lastScrollY) {
        setIsTransparent(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsTransparent(true);
        setIsMobileMenuOpen(false);
        setActiveDesktopDropdown(null);
        setActiveDesktopSubDropdown(null);
      }

      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setActiveMobileSection(null);
      } else {
        setActiveDesktopDropdown(null);
        setActiveDesktopSubDropdown(null);
      }
    };

    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest(".desktop-dropdown-trigger") &&
        !event.target.closest(".desktop-dropdown-menu") &&
        !event.target.closest(".desktop-subdropdown-trigger") &&
        !event.target.closest(".resources-dropdown-trigger") &&
        !event.target.closest(".resources-dropdown-menu")
      ) {
        setIsMobileMenuOpen(false);
        setActiveDesktopDropdown(null);
        setActiveDesktopSubDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollY]);

  const toggleMobileSection = (index) => {
    setActiveMobileSection(activeMobileSection === index ? null : index);
  };

  const toggleDesktopDropdown = (index) => {
    setActiveDesktopDropdown(activeDesktopDropdown === index ? null : index);
    if (activeDesktopDropdown !== index) {
      setActiveDesktopSubDropdown(null);
    }
  };

  const toggleDesktopSubDropdown = (index, e) => {
    e.stopPropagation();
    setActiveDesktopSubDropdown(
      activeDesktopSubDropdown === index ? null : index
    );
  };

  const toggleResourcesDropdown = () => {
    setActiveDesktopDropdown(
      activeDesktopDropdown === "resources" ? null : "resources"
    );
  };

  // Fix for mobile menu toggle
  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`navbar-container fixed top-2 left-2 right-2 sm:left-4 sm:right-4 z-50 rounded-xl transition-all duration-500 transform
        ${isTransparent ? "opacity-0 hover:opacity-100" : "opacity-100"}
        ${isScrolled
          ? "bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-lg"
          : "bg-white/90 backdrop-blur-sm border border-gray-200/30 shadow-md"
        }
        ${hasLaunched ? "translate-y-0" : "-translate-y-8"}
      `}
      style={{
        transitionDuration: hasLaunched ? "500ms" : "800ms",
        transitionTimingFunction: hasLaunched
          ? "ease-out"
          : "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-1">
        <div className="flex items-center justify-between h-12 sm:h-14">
          {/* Logo */}
          <Link href="/">
            <div
              className={`relative p-1 bg-slate-700 rounded-lg transition-all duration-700 ${hasLaunched ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              style={{
                transitionDelay: hasLaunched ? "0ms" : "200ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <Image
                src="/logo/webber-logo.png"
                width={200}
                height={200}
                alt="logo"
                className=""
              />
            </div>
          </Link>

          {/* Desktop/Tablet Menu - Hidden on mobile */}
          <div
            className={`hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6 transition-all duration-800 ${hasLaunched
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
              }`}
            style={{
              transitionDelay: hasLaunched ? "0ms" : "400ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {navItems.map((item, i) => (
              <div
                key={i}
                className="relative group"
                style={{
                  animationDelay: hasLaunched ? "0ms" : `${500 + i * 100}ms`,
                }}
              >
                {item.hasDropdown ? (
                  <div
                    className="flex items-center space-x-1 text-gray-700 hover:text-black transition-all text-sm font-medium py-1 px-2 cursor-pointer desktop-dropdown-trigger"
                    onClick={() => toggleDesktopDropdown(i)}
                    onMouseEnter={() => setActiveDesktopDropdown(i)}
                  >
                    <span className="whitespace-nowrap">{item.name}</span>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform ${activeDesktopDropdown === i ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                ) : (
                  <Link href={item.link ? item.link : "/"}>
                    <div className="flex items-center space-x-1 text-gray-700 hover:text-black transition-all text-sm font-medium py-1 px-2 cursor-pointer">
                      <span className="whitespace-nowrap">{item.name}</span>
                    </div>
                  </Link>
                )}

                {item.hasDropdown && activeDesktopDropdown === i && (
                  <div
                    ref={desktopDropdownRef}
                    className={`absolute left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 desktop-dropdown-menu transition-all duration-200`}
                    onMouseEnter={() => setActiveDesktopDropdown(i)}
                    onMouseLeave={() => {
                      setActiveDesktopDropdown(null);
                      setActiveDesktopSubDropdown(null);
                    }}
                  >
                    {item.items.map((category, ci) => (
                      <div key={ci} className="relative">
                        <div
                          className="flex items-center justify-between px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 text-sm border-b border-gray-100 last:border-0 transition-colors cursor-pointer desktop-subdropdown-trigger"
                          onClick={(e) => {
                            if (category.hasSubDropdown) {
                              toggleDesktopSubDropdown(ci, e);
                            }
                          }}
                          onMouseEnter={() => {
                            if (category.hasSubDropdown) {
                              setActiveDesktopSubDropdown(ci);
                            }
                          }}
                        >
                          <span className="font-medium">{category.type}</span>
                          {category.hasSubDropdown && (
                            <ChevronRight className="w-3 h-3" />
                          )}
                        </div>

                        {category.hasSubDropdown &&
                          activeDesktopSubDropdown === ci && (
                            <div className="absolute left-full top-0 ml-1 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-60 max-h-[60vh] overflow-y-auto">
                              <div className="p-3">
                                <div className="grid grid-cols-2 gap-2">
                                  {category.chips &&
                                    category.chips.map((chip, chipIndex) => (

                                      <Link key={chipIndex} href={`/Products/${chip.id}`}>
                                        <div
                                          className="p-3 bg-gray-50 border border-gray-100 rounded-lg hover:shadow-sm hover:border-blue-200 transition-all cursor-pointer group/card"

                                        >

                                          <h4 className="font-medium text-gray-900 text-sm group-hover/card:text-blue-600 mb-1">
                                            {chip.name}
                                          </h4>
                                          <p className="text-xs text-gray-600 mb-2">
                                            {chip.description}
                                          </p>
                                          <button
                                            onClick={(e) => {
                                              e.preventDefault();
                                              e.stopPropagation();
                                              handleDownload(
                                                chip.documentUrl,
                                                `${chip.name}.pdf`
                                              );
                                            }}
                                            className="inline-flex items-center text-xs font-medium text-green-600 hover:text-green-700 transition-colors group/download mt-1 bg-green-50 hover:bg-green-100 px-2 py-1 rounded"
                                          >
                                            <svg
                                              className="w-3 h-3 mr-1 transition-transform group-hover/download:translate-y-0.5"
                                              fill="none"
                                              stroke="currentColor"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                              />
                                            </svg>
                                            <span>Download</span>
                                          </button>
                                        </div>
                                      </Link>


                                    ))}
                                </div>
                              </div>
                            </div>
                          )}
                      </div>
                    ))}
                    {item.name.toLowerCase() === "products" && (
                      <Link href="/Products">
                        <div className="flex items-center justify-between px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 text-sm border-b font-bold border-gray-100 last:border-0 transition-colors cursor-pointer">
                          <span>View All Products</span>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div
            className={`flex items-center space-x-1 sm:space-x-2 transition-all duration-700 ${hasLaunched
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
              }`}
          >
            {/* Resources Button with Dropdown - Hidden on small screens, visible on sm+ */}
            <div
              className={`hidden sm:block relative resources-dropdown-trigger transition-all duration-600 ${hasLaunched ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              style={{
                transitionDelay: hasLaunched ? "0ms" : "650ms",
              }}
              onMouseEnter={() => setActiveDesktopDropdown("resources")}
              onMouseLeave={() => {
                if (activeDesktopDropdown === "resources") {
                  setActiveDesktopDropdown(null);
                }
              }}
            >
              <Button
                title={
                  <div className="flex items-center space-x-1">
                    <span>Resources</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${activeDesktopDropdown === "resources"
                          ? "rotate-180"
                          : ""
                        }`}
                    />
                  </div>
                }
                onClick={toggleResourcesDropdown}
                containerClass="border border-gray-600 text-gray-700 rounded-lg"
              />

              {/* Dropdown Menu */}
              <div
  className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 resources-dropdown-menu transition-all duration-200 ${
    activeDesktopDropdown === "resources"
      ? "opacity-100 visible translate-y-0"
      : "opacity-0 invisible -translate-y-2"
  }`}
  onMouseEnter={() => setActiveDesktopDropdown("resources")}
  onMouseLeave={() => setActiveDesktopDropdown(null)}
>
  <div className="flex flex-col py-2">
    <Link
      href="/Blogs"
      className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
    >
      Blogs
    </Link>
    <Link
      href="/Media"
      className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
    >
      Media
    </Link>
  </div>
</div>

            </div>

            {/* Contact Button */}
            <div>
              <Button
                title="Contact"
                onClick={handleContactClick}
                containerClass="bg-black text-white hover:bg-gray-800 border border-black rounded-lg"
              />
            </div>

            {/* Mobile Menu Toggle - Only visible on mobile/tablet */}
            <div
              className={`block md:hidden transition-all duration-600 ${hasLaunched ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              style={{
                transitionDelay: hasLaunched ? "0ms" : "750ms",
              }}
            >
              <button
                onClick={toggleMobileMenu}
                className="p-1.5 sm:p-2 border border-gray-300 bg-white text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors z-60 relative"
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden mt-2 bg-gray-900 border border-gray-800 rounded-lg shadow-xl overflow-hidden z-60 relative"
          >
            <div className="px-3 sm:px-4 py-3 space-y-1">
              {navItems.map((item, i) => (
                <div key={i}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (item.hasDropdown) {
                        toggleMobileSection(i);
                      } else {
                        window.location.href = item.link || "/";
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className="w-full flex justify-between items-center text-gray-300 hover:text-white text-sm font-medium py-2.5 px-2 hover:bg-gray-800/30 rounded transition-all"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${activeMobileSection === i ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown Content */}
                  {item.hasDropdown && activeMobileSection === i && (
                    <div
                      className="ml-2 sm:ml-4 mt-2 space-y-3 animate-in slide-in-from-top-2 duration-200"
                      onMouseEnter={(e) => e.stopPropagation()}
                    >
                      {item.items.map((category, ci) => (
                        <div key={ci}>
                          <div className="text-white font-medium text-sm py-2 border-l-2 border-cyan-400 pl-3">
                            {category.type}
                          </div>

                          {category.hasSubDropdown && category.chips && (
                            <div
                              className="ml-2 sm:ml-4 space-y-2 max-h-64 overflow-y-auto"
                              onMouseEnter={(e) => e.stopPropagation()}
                            >
                              {category.chips.map((chip, chipIndex) => (
                                <div
                                  key={chipIndex}
                                  className="bg-gray-800/50 p-3 rounded border border-gray-700 hover:border-gray-600 transition-colors mx-1 cursor-pointer"
                                  onClick={() => {
                                    handleProductClick(chip.name);
                                    setIsMobileMenuOpen(false);
                                  }}
                                >
                                  <div className="font-medium text-white text-sm mb-1">
                                    {chip.name}
                                  </div>
                                  <div className="text-xs text-gray-400 leading-relaxed mb-2">
                                    {chip.description}
                                  </div>
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      handleDownload(
                                        chip.documentUrl,
                                        `${chip.name}.pdf`
                                      );
                                    }}
                                    className="inline-flex items-center text-xs font-medium text-green-400 hover:text-green-300 transition-colors mt-1 bg-green-900/30 hover:bg-green-900/50 px-2 py-1 rounded"
                                  >
                                    <svg
                                      className="w-3 h-3 mr-1"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                      />
                                    </svg>
                                    <span>Download</span>
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Resources Section - Only show on xs */}
              <div className="block sm:hidden pt-3 border-t border-gray-800">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMobileSection("resources");
                  }}
                  className="w-full flex justify-between items-center text-gray-300 hover:text-white text-sm font-medium py-2.5 px-2 hover:bg-gray-800/30 rounded transition-all"
                >
                  <span>Resources</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${activeMobileSection === "resources" ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {activeMobileSection === "resources" && (
                  <div
                    className="ml-4 mt-2 space-y-2"
                    onMouseEnter={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => {
                        window.location.href = "/Blog";
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left text-gray-400 hover:text-white text-sm py-2 px-2 hover:bg-gray-800/30 rounded transition-colors"
                    >
                      Blogs
                    </button>
                    <button
                      onClick={() => {
                        window.location.href = "/Media";
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left text-gray-400 hover:text-white text-sm py-2 px-2 hover:bg-gray-800/30 rounded transition-colors"
                    >
                      Media
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="pt-3 border-t border-gray-800 space-y-2">
                <Button
                  title="Contact Us"
                  onClick={handleContactClick}
                  containerClass="w-full bg-cyan-500 text-white hover:bg-cyan-600 border border-cyan-500 rounded-lg py-3"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ElectricChipNavbar;
