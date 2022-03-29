function navbar(){
    return `
    <div id="container">
       <div id="first-box">
        <div>
            <img  onclick="window.location.href='index.html'" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjEuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMDkuNyA2OS43IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDkuNyA2OS43OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzVEQzZBRDt9Cgkuc3Qxe2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQoJLnN0MntmaWxsOiM1REM2QUQ7fQo8L3N0eWxlPgo8Zz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01Ny4xLDM5LjFDNTQuOCwxOSwzNCw5LjYsMTYuNiwxOC45Yy0yLjQsMS4zLTUuNSwzLjktNy4zLDZDNC43LDMwLjMsMi42LDM4LDMuNSw0NS4yCgkJCWMxLjYsMTMuMSwxNC4xLDI0LjUsMzAuMSwyMi43QzQ3LDY2LjUsNTguOCw1NCw1Ny4xLDM5LjF6IE0xNS45LDQ2LjhjLTEuMSwzLTIuOSw0LjItMC43LDguOWMxLjIsMi42LDMsNC4yLDQuOCw2LjEKCQkJQzEzLjcsNjAuNiwwLDQ0LjYsMTUuOSw0Ni44eiBNMjIuMSw0NS4zYy05LjQsMC4xLTE0LjktMy4xLTE0LjEsNi4zYy0xLjktMi40LTIuNC02LjktMS05LjhjMS4yLTIuNCwzLjYtMy44LDYuNy00LjUKCQkJYzQuOC0xLjIsMTUuNS0wLjcsMjEtMC40QzMzLjMsNDMuNiwyNy42LDQ1LjMsMjIuMSw0NS4zeiBNMzksMzAuNWMtNi42LDQtMTYuMiwzLjEtMjQsNWMtNC45LDEuMi01LjgsMi43LTguNSw1LjMKCQkJYzEuMi0xOC44LDI1LjctMjUuMywzOC0xOC45QzQ0LjQsMjUuNSw0MS43LDI4LjksMzksMzAuNXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjIuMSwxNi42YzAuNy0wLjIsMS40LTAuNCwxLjMtMC41Yy0wLjItMC4yLTAuNC0wLjQtMC43LTFsLTAuMy0xYzAuNC0wLjIsMS44LTAuNCwyLjQtMC42CgkJCWMwLjgtMC4yLDEuNi0wLjUsMi4yLTAuOGMxLjMtMC42LDIuNS0xLjYsMy4zLTIuNmMyLjEtMi42LDItNi4xLDEuNy0xMGMtMC41LDAuMy0wLjgsMC43LTEuNSwxLjFjLTQuNywyLjYtOC44LDQuMi04LjYsMTAuOQoJCQlsLTAuNi0xLjJjLTAuMi0wLjQtMC41LTAuOS0wLjctMS4zYy0wLjUtMC45LTAuOS0xLjktMS43LTIuMUwxOCw4QzE4LjIsOS40LDIxLjYsMTMuMywyMi4xLDE2LjZ6Ii8+Cgk8L2c+Cgk8Zz4KCQk8ZyBjbGFzcz0ic3QxIj4KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTcwLjQsNTQuM2MwLjEsMC4xLDAuMSwwLjIsMC4xLDAuM3MwLDAuMi0wLjEsMC4zYy0wLjEsMC4xLTAuMiwwLjEtMC4zLDAuMWgtMS44djUuNmMwLDAuMSwwLDAuMi0wLjEsMC4zCgkJCQljLTAuMSwwLjEtMC4yLDAuMS0wLjQsMC4xYy0wLjEsMC0wLjMsMC0wLjQtMC4xYy0wLjEtMC4xLTAuMS0wLjItMC4xLTAuM3YtNS42aC0xLjhjLTAuMSwwLTAuMywwLTAuMy0wLjFTNjUsNTQuOCw2NSw1NC43CgkJCQljMC0wLjEsMC0wLjIsMC4xLTAuM3MwLjItMC4xLDAuMy0wLjFoNC42QzcwLjIsNTQuMiw3MC4zLDU0LjMsNzAuNCw1NC4zeiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNODQuNCw1NC4zYzAuMSwwLjEsMC4xLDAuMiwwLjEsMC4zdjZjMCwwLjEtMC4xLDAuMy0wLjEsMC40Yy0wLjEsMC4xLTAuMiwwLjEtMC40LDAuMWMtMC4xLDAtMC4yLDAtMC4zLTAuMQoJCQkJYy0wLjEtMC4xLTAuMS0wLjItMC4xLTAuNHYtMi42SDgwdjIuNmMwLDAuMSwwLDAuMy0wLjEsMC40Yy0wLjEsMC4xLTAuMiwwLjEtMC40LDAuMWMtMC4xLDAtMC4zLDAtMC40LTAuMQoJCQkJQzc5LjEsNjEsNzksNjAuOSw3OSw2MC43di02YzAtMC4xLDAtMC4yLDAuMS0wLjNjMC4xLTAuMSwwLjItMC4xLDAuNC0wLjFjMC4xLDAsMC4yLDAsMC4zLDAuMWMwLjEsMC4xLDAuMSwwLjIsMC4xLDAuM3YyLjVoMy42CgkJCQl2LTIuNWMwLTAuMSwwLTAuMiwwLjEtMC4zYzAuMS0wLjEsMC4yLTAuMSwwLjQtMC4xQzg0LjIsNTQuMiw4NC4zLDU0LjMsODQuNCw1NC4zeiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNOTQuNCw2MS4xYy0wLjEsMC4xLTAuMiwwLjEtMC40LDAuMWMtMC4xLDAtMC4zLDAtMC40LTAuMWMtMC4xLTAuMS0wLjEtMC4yLTAuMS0wLjR2LTZjMC0wLjEsMC0wLjIsMC4xLTAuMwoJCQkJYzAuMS0wLjEsMC4yLTAuMSwwLjQtMC4xYzAuMSwwLDAuMiwwLDAuMywwLjFjMC4xLDAuMSwwLjEsMC4yLDAuMSwwLjN2NkM5NC42LDYwLjksOTQuNSw2MSw5NC40LDYxLjF6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMDkuMSw1NC4zYzAuMSwwLjEsMC4xLDAuMiwwLjEsMC4zdjYuMWMwLDAuMSwwLDAuMy0wLjEsMC40Yy0wLjEsMC4xLTAuMiwwLjEtMC4zLDAuMWMtMC4xLDAtMC4xLDAtMC4yLDAKCQkJCWMtMC4xLDAtMC4xLTAuMS0wLjItMC4xbC0zLjktNS4xdjQuOGMwLDAuMSwwLDAuMi0wLjEsMC4zYy0wLjEsMC4xLTAuMiwwLjEtMC4zLDAuMWMtMC4xLDAtMC4yLDAtMC4zLTAuMQoJCQkJYy0wLjEtMC4xLTAuMS0wLjItMC4xLTAuM3YtNi4xYzAtMC4xLDAtMC4zLDAuMS0wLjNjMC4xLTAuMSwwLjItMC4xLDAuMy0wLjFjMC4xLDAsMC4yLDAsMC4yLDBjMC4xLDAsMC4xLDAuMSwwLjIsMC4xbDMuOSw1LjEKCQkJCXYtNC45YzAtMC4xLDAtMC4yLDAuMS0wLjNzMC4yLTAuMSwwLjMtMC4xQzEwOC45LDU0LjIsMTA5LDU0LjMsMTA5LjEsNTQuM3oiLz4KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTEyMy42LDYwLjdjMCwwLjEtMC4xLDAuMy0wLjIsMC40Yy0wLjEsMC4xLTAuMiwwLjEtMC40LDAuMWMtMC4xLDAtMC4yLTAuMS0wLjMtMC4ybC0yLjQtMy4xbC0xLjEsMS4xdjEuNwoJCQkJYzAsMC4xLDAsMC4zLTAuMSwwLjRjLTAuMSwwLjEtMC4yLDAuMS0wLjQsMC4xYy0wLjEsMC0wLjMsMC0wLjQtMC4xYy0wLjEtMC4xLTAuMS0wLjItMC4xLTAuNHYtNmMwLTAuMSwwLTAuMiwwLjEtMC4zCgkJCQljMC4xLTAuMSwwLjItMC4xLDAuNC0wLjFzMC4zLDAsMC40LDAuMWMwLjEsMC4xLDAuMSwwLjIsMC4xLDAuM3YzLjFsMy41LTMuNGMwLjEtMC4xLDAuMy0wLjIsMC40LTAuMmMwLjEsMCwwLjIsMCwwLjMsMC4xCgkJCQljMC4xLDAuMSwwLjEsMC4yLDAuMSwwLjNjMCwwLjEsMCwwLjItMC4xLDAuM2wtMi40LDIuMmwyLjUsMy4yQzEyMy42LDYwLjUsMTIzLjYsNjAuNiwxMjMuNiw2MC43eiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTQzLjMsNTUuMXYyLjFoMi41YzAuMSwwLDAuMywwLDAuMywwLjFzMC4xLDAuMiwwLjEsMC4zYzAsMC4xLDAsMC4yLTAuMSwwLjNjLTAuMSwwLjEtMC4yLDAuMS0wLjMsMC4xCgkJCQloLTIuNXYyLjZjMCwwLjEsMCwwLjItMC4xLDAuM2MtMC4xLDAuMS0wLjIsMC4xLTAuMywwLjFjLTAuMSwwLTAuMywwLTAuNC0wLjFjLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC4zdi02YzAtMC4xLDAtMC4yLDAuMS0wLjMKCQkJCWMwLjEtMC4xLDAuMi0wLjEsMC4zLTAuMWgzLjRjMC4xLDAsMC4zLDAsMC4zLDAuMWMwLjEsMC4xLDAuMSwwLjIsMC4xLDAuM2MwLDAuMSwwLDAuMi0wLjEsMC4zYy0wLjEsMC4xLTAuMiwwLjEtMC4zLDAuMUgxNDMuM3oKCQkJCSIvPgoJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTYwLjgsNjAuNmMwLDAuMSwwLjEsMC4xLDAuMSwwLjJjMCwwLjEsMCwwLjItMC4xLDAuM2MtMC4xLDAuMS0wLjIsMC4xLTAuMywwLjFzLTAuMiwwLTAuMy0wLjEKCQkJCWMtMC4yLTAuMS0wLjQtMC4zLTAuNS0wLjVjLTAuMS0wLjMtMC4yLTAuNi0wLjItMS4xYzAtMC4zLTAuMS0wLjYtMC4zLTAuN3MtMC41LTAuMi0wLjgtMC4yaC0ydjIuMmMwLDAuMSwwLDAuMy0wLjEsMC4zCgkJCQlzLTAuMiwwLjEtMC4zLDAuMWMtMC4yLDAtMC4zLDAtMC40LTAuMWMtMC4xLTAuMS0wLjItMC4yLTAuMi0wLjN2LTZjMC0wLjEsMC0wLjIsMC4xLTAuM2MwLjEtMC4xLDAuMi0wLjEsMC4zLTAuMWgyLjgKCQkJCWMwLjQsMCwwLjcsMC4xLDEsMC4zYzAuMywwLjIsMC41LDAuNCwwLjcsMC43YzAuMiwwLjMsMC4zLDAuNywwLjMsMWMwLDAuNC0wLjEsMC43LTAuMywxcy0wLjUsMC42LTAuOCwwLjcKCQkJCWMwLjIsMC4xLDAuNCwwLjMsMC42LDAuNWMwLjEsMC4yLDAuMiwwLjUsMC4yLDAuOGMwLDAuNCwwLjEsMC42LDAuMSwwLjhjMCwwLjEsMC4xLDAuMiwwLjIsMC4zCgkJCQlDMTYwLjcsNjAuNSwxNjAuNyw2MC41LDE2MC44LDYwLjZ6IE0xNTksNTcuNWMwLjEtMC4xLDAuMy0wLjMsMC40LTAuNWMwLjEtMC4yLDAuMS0wLjQsMC4xLTAuN2MwLTAuMy0wLjEtMC42LTAuMy0wLjgKCQkJCWMtMC4yLTAuMi0wLjQtMC4zLTAuNy0wLjNoLTIuMnYyLjVoMi4zQzE1OC43LDU3LjYsMTU4LjksNTcuNiwxNTksNTcuNXoiLz4KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE3My43LDYwLjRjMC4xLDAuMSwwLjEsMC4yLDAuMSwwLjNjMCwwLjEsMCwwLjItMC4xLDAuM3MtMC4yLDAuMS0wLjMsMC4xaC0zLjVjLTAuMSwwLTAuMiwwLTAuMy0wLjEKCQkJCWMtMC4xLTAuMS0wLjEtMC4yLTAuMS0wLjN2LTZjMC0wLjEsMC0wLjIsMC4xLTAuM2MwLjEtMC4xLDAuMi0wLjEsMC4zLTAuMWgzLjVjMC4xLDAsMC4zLDAsMC4zLDAuMXMwLjEsMC4yLDAuMSwwLjMKCQkJCWMwLDAuMSwwLDAuMi0wLjEsMC4zYy0wLjEsMC4xLTAuMiwwLjEtMC4zLDAuMWgtM3YyaDIuNWMwLjEsMCwwLjMsMCwwLjMsMC4xYzAuMSwwLjEsMC4xLDAuMiwwLjEsMC4zYzAsMC4xLDAsMC4yLTAuMSwwLjMKCQkJCWMtMC4xLDAuMS0wLjIsMC4xLTAuMywwLjFoLTIuNXYyLjJoM0MxNzMuNSw2MC4zLDE3My42LDYwLjMsMTczLjcsNjAuNHoiLz4KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE4My4zLDYxLjFjLTAuNC0wLjEtMC43LTAuNC0xLjEtMC43Yy0wLjEtMC4xLTAuMi0wLjMtMC4yLTAuNGMwLTAuMSwwLTAuMiwwLjEtMC4zCgkJCQljMC4xLTAuMSwwLjItMC4xLDAuMy0wLjFjMC4xLDAsMC4yLDAsMC4zLDAuMWMwLjMsMC4yLDAuNSwwLjQsMC44LDAuNWMwLjMsMC4xLDAuNiwwLjIsMSwwLjJjMC40LDAsMC44LTAuMSwxLjEtMC4zCgkJCQlzMC40LTAuNCwwLjQtMC43YzAtMC4zLTAuMi0wLjYtMC40LTAuOGMtMC4zLTAuMi0wLjctMC4zLTEuMy0wLjVjLTAuNy0wLjEtMS4yLTAuNC0xLjYtMC43Yy0wLjQtMC4zLTAuNi0wLjgtMC42LTEuMwoJCQkJYzAtMC40LDAuMS0wLjcsMC4zLTFjMC4yLTAuMywwLjUtMC41LDAuOS0wLjdjMC40LTAuMiwwLjgtMC4yLDEuMi0wLjJjMC40LDAsMC44LDAuMSwxLjIsMC4yYzAuNCwwLjEsMC43LDAuMywwLjksMC41CgkJCQljMC4yLDAuMSwwLjIsMC4zLDAuMiwwLjRjMCwwLjEsMCwwLjItMC4xLDAuM2MtMC4xLDAuMS0wLjIsMC4xLTAuMywwLjFjLTAuMSwwLTAuMiwwLTAuMi0wLjFjLTAuMi0wLjItMC40LTAuMy0wLjctMC40CgkJCQlzLTAuNi0wLjItMC45LTAuMmMtMC40LDAtMC44LDAuMS0xLjEsMC4zYy0wLjMsMC4yLTAuNCwwLjQtMC40LDAuN2MwLDAuMywwLjEsMC42LDAuNCwwLjhjMC4zLDAuMiwwLjcsMC4zLDEuMiwwLjQKCQkJCWMwLjUsMC4xLDAuOSwwLjIsMS4zLDAuNGMwLjMsMC4yLDAuNiwwLjQsMC44LDAuNnMwLjMsMC42LDAuMywxLjFjMCwwLjQtMC4xLDAuNy0wLjMsMWMtMC4yLDAuMy0wLjUsMC41LTAuOSwwLjcKCQkJCWMtMC40LDAuMi0wLjgsMC4yLTEuMiwwLjJDMTg0LjEsNjEuMywxODMuNyw2MS4yLDE4My4zLDYxLjF6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yMDEsNTQuM2MwLjEsMC4xLDAuMSwwLjIsMC4xLDAuM3Y2YzAsMC4xLTAuMSwwLjMtMC4yLDAuNGMtMC4xLDAuMS0wLjIsMC4xLTAuNCwwLjFjLTAuMSwwLTAuMiwwLTAuMy0wLjEKCQkJCWMtMC4xLTAuMS0wLjEtMC4yLTAuMS0wLjR2LTIuNmgtMy41djIuNmMwLDAuMS0wLjEsMC4zLTAuMiwwLjRjLTAuMSwwLjEtMC4yLDAuMS0wLjMsMC4xYy0wLjEsMC0wLjMsMC0wLjQtMC4xCgkJCQljLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC40di02YzAtMC4xLDAtMC4yLDAuMS0wLjNjMC4xLTAuMSwwLjItMC4xLDAuNC0wLjFjMC4xLDAsMC4yLDAsMC4zLDAuMWMwLjEsMC4xLDAuMSwwLjIsMC4xLDAuM3YyLjVoMy41CgkJCQl2LTIuNWMwLTAuMSwwLTAuMiwwLjEtMC4zYzAuMS0wLjEsMC4yLTAuMSwwLjQtMC4xQzIwMC44LDU0LjIsMjAwLjksNTQuMywyMDEsNTQuM3oiLz4KCQk8L2c+CgkJPGcgY2xhc3M9InN0MSI+CgkJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik02OS41LDI5LjJ2Nmg3LjNjMC42LDAsMS4xLDAuMiwxLjUsMC42YzAuNCwwLjQsMC42LDAuOSwwLjYsMS40YzAsMC41LTAuMiwwLjktMC42LDEuMwoJCQkJYy0wLjQsMC40LTAuOSwwLjYtMS41LDAuNmgtNy4zVjQ3YzAsMC42LTAuMiwxLjEtMC42LDEuNXMtMC45LDAuNi0xLjUsMC42Yy0wLjYsMC0xLjItMC4yLTEuNS0wLjZjLTAuNC0wLjQtMC42LTAuOS0wLjYtMS41CgkJCQlWMjcuNGMwLTAuNiwwLjItMS4xLDAuNi0xLjVjMC40LTAuNCwwLjktMC42LDEuNS0wLjZoMTFjMC42LDAsMS4xLDAuMiwxLjUsMC42czAuNiwwLjksMC42LDEuNGMwLDAuNS0wLjIsMC45LTAuNiwxLjMKCQkJCXMtMC45LDAuNi0xLjUsMC42SDY5LjV6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMDUuNiw0Ni41YzAuMiwwLjMsMC4zLDAuNiwwLjMsMC45YzAsMC40LTAuMSwwLjgtMC40LDEuMWMtMC4zLDAuNC0wLjksMC42LTEuNiwwLjZjLTAuNSwwLTEtMC4xLTEuNS0wLjQKCQkJCWMtMS42LTAuOS0yLjQtMi44LTIuNC01LjdjMC0wLjgtMC4zLTEuNS0wLjgtMS45Yy0wLjUtMC41LTEuMy0wLjctMi4zLTAuN2gtNi40VjQ3YzAsMC42LTAuMiwxLjEtMC41LDEuNQoJCQkJYy0wLjMsMC40LTAuOCwwLjYtMS4zLDAuNmMtMC43LDAtMS4yLTAuMi0xLjctMC42cy0wLjctMC45LTAuNy0xLjVWMjcuNGMwLTAuNiwwLjItMS4xLDAuNi0xLjVjMC40LTAuNCwwLjktMC42LDEuNS0wLjZoOS44CgkJCQljMS4yLDAsMi4zLDAuMywzLjMsMWMxLDAuNiwxLjksMS41LDIuNSwyLjZjMC42LDEuMSwwLjksMi40LDAuOSwzLjdjMCwxLjEtMC4zLDIuMi0wLjksMy4zYy0wLjYsMS4xLTEuNCwxLjktMi40LDIuNgoJCQkJYzEuNCwxLDIuMiwyLjMsMi4zLDRjMC4xLDAuNCwwLjEsMC43LDAuMSwxLjFjMC4xLDAuNywwLjIsMS4yLDAuMywxLjVjMC4xLDAuMywwLjMsMC41LDAuNiwwLjdDMTA1LjIsNDYsMTA1LjQsNDYuMiwxMDUuNiw0Ni41egoJCQkJIE05OS4xLDM2LjRjMC40LTAuNCwwLjctMC45LDEtMS41YzAuMi0wLjYsMC40LTEuMywwLjQtMi4xYzAtMC42LTAuMS0xLjItMC40LTEuOGMtMC4yLTAuNS0wLjYtMS0xLTEuMwoJCQkJYy0wLjQtMC4zLTAuOC0wLjUtMS4yLTAuNWgtNy40VjM3aDcuNEM5OC4zLDM3LDk4LjcsMzYuOCw5OS4xLDM2LjR6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMzAuMyw0Ny4zYzAsMC42LTAuMiwxLjEtMC42LDEuNGMtMC40LDAuNC0wLjgsMC42LTEuMywwLjZjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNHMtMC42LTAuNi0wLjgtMQoJCQkJbC0xLjgtNC4xaC0xMC4xbC0xLjgsNC4xYy0wLjIsMC40LTAuNCwwLjgtMC43LDFjLTAuMywwLjItMC43LDAuNC0xLjEsMC40Yy0wLjYsMC0xLTAuMi0xLjMtMC41Yy0wLjMtMC4zLTAuNS0wLjctMC41LTEuMwoJCQkJYzAtMC4yLDAtMC40LDAuMS0wLjZsOC41LTIwLjNjMC4yLTAuNSwwLjUtMC44LDAuOC0xLjFjMC40LTAuMiwwLjgtMC40LDEuMi0wLjNjMC40LDAsMC44LDAuMSwxLjEsMC40czAuNiwwLjYsMC44LDFsOC40LDE5LjkKCQkJCUMxMzAuMiw0Ni44LDEzMC4zLDQ3LDEzMC4zLDQ3LjN6IE0xMTYuMywzOS45aDYuOGwtMy40LThMMTE2LjMsMzkuOXoiLz4KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE1My45LDQ3LjNjMCwwLjYtMC4yLDEuMS0wLjYsMS40cy0wLjgsMC42LTEuMywwLjZjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGMtMC4zLTAuMi0wLjYtMC42LTAuOC0xCgkJCQlsLTEuOC00LjFoLTEwLjFsLTEuOCw0LjFjLTAuMiwwLjQtMC40LDAuOC0wLjcsMWMtMC4zLDAuMi0wLjcsMC40LTEuMSwwLjRjLTAuNiwwLTEtMC4yLTEuMy0wLjVjLTAuMy0wLjMtMC41LTAuNy0wLjUtMS4zCgkJCQljMC0wLjIsMC0wLjQsMC4xLTAuNmw4LjUtMjAuM2MwLjItMC41LDAuNS0wLjgsMC44LTEuMWMwLjQtMC4yLDAuOC0wLjQsMS4yLTAuM2MwLjQsMCwwLjgsMC4xLDEuMSwwLjRzMC42LDAuNiwwLjgsMWw4LjQsMTkuOQoJCQkJQzE1My44LDQ2LjgsMTUzLjksNDcsMTUzLjksNDcuM3ogTTEzOS45LDM5LjloNi44bC0zLjQtOEwxMzkuOSwzOS45eiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTc2LjUsMjguNmwtMTIuOSwxNi42aDEwLjhjMC42LDAsMS4xLDAuMiwxLjUsMC41YzAuNCwwLjQsMC42LDAuOCwwLjYsMS40YzAsMC42LTAuMiwxLTAuNiwxLjQKCQkJCWMtMC40LDAuNC0wLjksMC42LTEuNSwwLjZoLTE0LjljLTAuNiwwLTEuMS0wLjItMS41LTAuNmMtMC40LTAuNC0wLjYtMC45LTAuNi0xLjRjMC0wLjQsMC4yLTAuOSwwLjUtMS4zbDEyLjktMTYuNmgtOS44CgkJCQljLTAuNiwwLTEuMS0wLjItMS41LTAuNWMtMC40LTAuNC0wLjYtMC44LTAuNi0xLjRjMC0wLjYsMC4yLTEsMC42LTEuNHMwLjktMC41LDEuNS0wLjVoMTMuOWMwLjUsMCwxLDAuMiwxLjUsMC42CgkJCQlzMC43LDAuOSwwLjcsMS40QzE3Ni45LDI3LjgsMTc2LjgsMjguMiwxNzYuNSwyOC42eiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjAyLjgsNDMuNGMtMSwxLjktMi40LDMuMy00LjEsNC40Yy0xLjgsMS4xLTMuNywxLjYtNS45LDEuNnMtNC4yLTAuNS01LjktMS42Yy0xLjgtMS4xLTMuMS0yLjYtNC4xLTQuNAoJCQkJYy0xLTEuOS0xLjUtMy45LTEuNS02LjJjMC0yLjIsMC41LTQuMywxLjUtNi4yczIuNC0zLjMsNC4xLTQuNGMxLjgtMS4xLDMuNy0xLjYsNS45LTEuNnM0LjIsMC41LDUuOSwxLjYKCQkJCWMxLjgsMS4xLDMuMSwyLjYsNC4xLDQuNGMxLDEuOSwxLjUsMy45LDEuNSw2LjJDMjA0LjMsMzkuNSwyMDMuOCw0MS41LDIwMi44LDQzLjR6IE0xOTguOSwzMy4xYy0wLjYtMS4yLTEuNS0yLjItMi42LTIuOQoJCQkJYy0xLjEtMC43LTIuMy0xLjEtMy43LTEuMWMtMS40LDAtMi42LDAuNC0zLjcsMS4xYy0xLjEsMC43LTEuOSwxLjctMi41LDIuOWMtMC42LDEuMi0wLjksMi42LTAuOSw0LjFjMCwxLjUsMC4zLDIuOSwwLjksNC4xCgkJCQljMC42LDEuMiwxLjQsMi4yLDIuNSwyLjljMS4xLDAuNywyLjMsMS4xLDMuNywxLjFjMS40LDAsMi42LTAuNCwzLjctMS4xYzEuMS0wLjcsMS45LTEuNywyLjYtMi45YzAuNi0xLjIsMC45LTIuNiwwLjktNC4xCgkJCQlDMTk5LjksMzUuNywxOTkuNSwzNC4zLDE5OC45LDMzLjF6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=" alt="">
        </div>
        <div id="home">
                <div><img id="homeicon" src="https://t3.ftcdn.net/jpg/00/95/07/14/240_F_95071432_1O8BWEIDGtd27ogifnx0aIiCcsDcLtUD.jpg" alt=""></div>
            <div>Home</div>
        </div>
       </div>
       <div id="second-box">
        <div id="input-box">
            <input type="text" placeholder="find fresh vegetables,Fruits and Dairy...">
        </div>
       </div>
        <div id="third-box">
       <div id="cart-Icon">
        <div><img id="cardicon" src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-shopping-cart_90604.png" alt=""></div>
        <div>Cart</div>
       </div>
        <div id="creditsicon">
            <img  id=Credit-Icon src="https://cdn-icons-png.flaticon.com/128/60/60484.png" alt="">
            <div>Credits</div>
        
        </div>
        <div id="usericon" >
            <div onclick="window.location.href='Login.html'">User</div>
        <div> <img  id="usericonimg" src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png" alt=""></div>
        </div>
        </div>
        
    </div>
    
    `
}
export {navbar}