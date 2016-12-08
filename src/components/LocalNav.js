import React, { Component } from 'react'

import '../styles/local_nav.css'
import '../../public/arrow.svg'

class LocalNav extends Component {
  render() {
    return(
      <nav className="local-nav">
        <div className="local-nav-left"> Company Dasboard </div>
        <div className="local-nav-right"></div>
          <img className="logo-type" width="30" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yNTYuMDMxLDI4OHYtNjMuNTYzYy02OC44MTMsMi4xMjUtMTI0LDU4LjIxOS0xMjQsMTI3LjU2M3M1NS4xODgsMTI1LjQwNiwxMjQsMTI3LjU5NFY0ODANCgljLTEwNi4wNjMsMC4wMzEtMTkyLjA2My04NS45MzgtMTkyLjA2My0xOTJzODYtMTkyLjAzMSwxOTIuMDYzLTE5MlYzMmwxOTIsMTI4TDI1Ni4wMzEsMjg4eiIvPg0KPC9zdmc+DQo=" role="presentation" />
          <a href="#" className="share">Share</a>
          <img className="logo-type" width="20" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNTEyLDI4OHYtNjRsLTY5LjE1Ni0xMS41MzFjLTQuODEzLTIwLjc4MS0xMy00MC4xODgtMjMuOTY5LTU3Ljc4MWw0MC43ODEtNTcuMDYzbC00NS4yNS00NS4yNWwtNTcuMDk0LDQwLjc1DQoJYy0xNy41OTQtMTAuOTM4LTM3LTE5LjE1Ni01Ny43ODEtMjRMMjg4LDBoLTY0bC0xMS41MzEsNjkuMTI1Yy0yMC43NSw0Ljg0NC00MC4xODgsMTMuMDYzLTU3Ljc4MSwyNGwtNTcuMDk0LTQwLjc1bC00NS4yNSw0NS4yNQ0KCWw0MC43ODEsNTcuMDYzYy0xMC45NjksMTcuNTYzLTE5LjE1NiwzNy0yMy45NjksNTcuNzgxTDAsMjI0djY0bDY5LjE1NiwxMS41MzFjNC44MTMsMjAuNzgxLDEzLDQwLjE4OCwyMy45NjksNTcuNzgxDQoJbC00MC43ODEsNTcuMDk0bDQ1LjI1LDQ1LjI1bDU3LjEyNS00MC43ODFjMTcuNTYzLDEwLjk2OSwzNywxOS4xNTYsNTcuNzUsMjMuOTY5TDIyNCw1MTJoNjRsMTEuNTMxLTY5LjE1Ng0KCWMyMC43NS00LjgxMyw0MC4xODgtMTMsNTcuNzgxLTIzLjk2OWw1Ny4wOTQsNDAuNzgxbDQ1LjI1LTQ1LjI1bC00MC43ODEtNTcuMDk0YzEwLjk2OS0xNy41OTQsMTkuMTU2LTM3LjAzMSwyMy45NjktNTcuNzgxTDUxMiwyODgNCgl6IE0yNTYsMzg0Yy03MC42ODgsMC0xMjgtNTcuMzEzLTEyOC0xMjhzNTcuMzEzLTEyOCwxMjgtMTI4czEyOCw1Ny4zMTMsMTI4LDEyOFMzMjYuNjg4LDM4NCwyNTYsMzg0eiIvPg0KPC9zdmc+DQo=" role="presentation" />
          <a href="#" className="settings">Settings</a>
          <img className="logo-type" width="20" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMwcHgiIGhlaWdodD0iMzBweCIgdmlld0JveD0iMCAwIDQzOC41MjkgNDM4LjUyOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUyOSA0MzguNTI5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE4MC4xNTYsMjI1LjgyOGMtMS45MDMtMS45MDItNC4wOTMtMi44NTQtNi41NjctMi44NTRjLTIuNDc1LDAtNC42NjUsMC45NTEtNi41NjcsMi44NTRsLTk0Ljc4Nyw5NC43ODdsLTQxLjExMi00MS4xMTcgICAgYy0zLjYxNy0zLjYxLTcuODk1LTUuNDIxLTEyLjg0Ny01LjQyMWMtNC45NTIsMC05LjIzNSwxLjgxMS0xMi44NTEsNS40MjFjLTMuNjE3LDMuNjIxLTUuNDI0LDcuOTA1LTUuNDI0LDEyLjg1NHYxMjcuOTA3ICAgIGMwLDQuOTQ4LDEuODA3LDkuMjI5LDUuNDI0LDEyLjg0N2MzLjYxOSwzLjYxMyw3LjkwMiw1LjQyNCwxMi44NTEsNS40MjRoMTI3LjkwNmM0Ljk0OSwwLDkuMjMtMS44MTEsMTIuODQ3LTUuNDI0ICAgIGMzLjYxNS0zLjYxNyw1LjQyNC03Ljg5OCw1LjQyNC0xMi44NDdzLTEuODA5LTkuMjMzLTUuNDI0LTEyLjg1NGwtNDEuMTEyLTQxLjEwNGw5NC43ODctOTQuNzkzICAgIGMxLjkwMi0xLjkwMywyLjg1My00LjA4NiwyLjg1My02LjU2NGMwLTIuNDc4LTAuOTUzLTQuNjYtMi44NTMtNi41N0wxODAuMTU2LDIyNS44Mjh6IiBmaWxsPSIjRkZGRkZGIi8+CgkJPHBhdGggZD0iTTQzMy4xMSw1LjQyNEM0MjkuNDk2LDEuODA3LDQyNS4yMTIsMCw0MjAuMjYzLDBIMjkyLjM1NmMtNC45NDgsMC05LjIyNywxLjgwNy0xMi44NDcsNS40MjQgICAgYy0zLjYxNCwzLjYxNS01LjQyMSw3Ljg5OC01LjQyMSwxMi44NDdzMS44MDcsOS4yMzMsNS40MjEsMTIuODQ3bDQxLjEwNiw0MS4xMTJsLTk0Ljc4Niw5NC43ODcgICAgYy0xLjkwMSwxLjkwNi0yLjg1NCw0LjA5My0yLjg1NCw2LjU2N3MwLjk1Myw0LjY2NSwyLjg1NCw2LjU2N2wzMi41NTIsMzIuNTQ4YzEuOTAyLDEuOTAzLDQuMDg2LDIuODUzLDYuNTYzLDIuODUzICAgIHM0LjY2MS0wLjk1LDYuNTYzLTIuODUzbDk0Ljc5NC05NC43ODdsNDEuMTA0LDQxLjEwOWMzLjYyLDMuNjE2LDcuOTA1LDUuNDI4LDEyLjg1NCw1LjQyOHM5LjIyOS0xLjgxMiwxMi44NDctNS40MjggICAgYzMuNjE0LTMuNjE0LDUuNDIxLTcuODk4LDUuNDIxLTEyLjg0N1YxOC4yNjhDNDM4LjUzLDEzLjMxNSw0MzYuNzM0LDkuMDQsNDMzLjExLDUuNDI0eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" role="presentation" />
          <a href="#" className="full-screen">Full Screen</a>
          <div className="widget-nav-button">
            <img className="logo-type" width="20" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgo8Zz4KPC9nPgoJPHBhdGggZD0iTTI5NS41MTYgMjE2LjQ5NGgxNTR2NzguOTkyaC0xNTR2LTc4Ljk5MnoiIGZpbGw9IiNmZmZmZmYiIC8+Cgk8cGF0aCBkPSJNNjIuNDc0IDIxNi41MTRoMTU0LjA1MHY3OC45NzFoLTE1NC4wNTB2LTc4Ljk3MXoiIGZpbGw9IiNmZmZmZmYiIC8+Cgk8cGF0aCBkPSJNMjE2LjUyNSAyOTUuNDY1aDc5LjAwMXYxNTQuMDUwaC03OS4wMDF2LTE1NC4wNTB6IiBmaWxsPSIjZmZmZmZmIiAvPgoJPHBhdGggZD0iTTIxNi41MjUgNjIuNDc0aDc5LjAwMXYxNTQuMDQxaC03OS4wMDF2LTE1NC4wNDF6IiBmaWxsPSIjZmZmZmZmIiAvPgoJPHBhdGggZD0iTTIxNi41MjUgMjE2LjUxNGg3OS4wMDF2NzguOTcxaC03OS4wMDF2LTc4Ljk3MXoiIGZpbGw9IiNmZmZmZmYiIC8+Cjwvc3ZnPgo=" role="presentation" />
            <a href="#">Add Widget</a>
          </div>
      </nav>
    )
  }
}

export default LocalNav
