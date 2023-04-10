// Generated by @compas/code-gen

/**
 * Match the route and params, based on the provided method and path.
 *
 * @param {string} method
 * @param {string} path
 * @returns {{ route: { group: string, name: string }, params: Record<string, string> }}
 */
export function routeMatcher(method, path) {
  if (!path.startsWith("/")) {
    path = "/" + path;
  }
  if (path.endsWith("/")) {
    path = path.slice(0, -1);
  }
  const params = Object.create(null);
  const matchPath = `${method.toUpperCase()}${path}`.split("/");
  if (
    matchPath[0] === "GET" &&
    matchPath[1] === "_compas" &&
    matchPath[2] === "structure.json"
  ) {
    if (matchPath.length === 3) {
      return { params, route: { group: "compas", name: "structure" } };
    }
  } else if (matchPath[0] === "POST" && matchPath[1] === "post") {
    if (matchPath[2] === "create") {
      if (matchPath.length === 3) {
        return { params, route: { group: "post", name: "create" } };
      }
    } else if (matchPath[2] === "list") {
      if (matchPath.length === 3) {
        return { params, route: { group: "post", name: "list" } };
      }
    }
    if (matchPath[3] === "update") {
      if (matchPath.length === 4) {
        params.postId = matchPath[2];
        return { params, route: { group: "post", name: "update" } };
      }
    }
  } else if (matchPath[0] === "GET" && matchPath[1] === "post") {
    if (matchPath[3] === "single") {
      if (matchPath.length === 4) {
        params.postId = matchPath[2];
        return { params, route: { group: "post", name: "single" } };
      }
    }
  }
  return undefined;
}