// src/core/navigation.ts

export function navigateTo(
  path: string,
  params?: Record<string, string | number>
) {
  let finalPath = path;
  if (params) {
    const values = Object.values(params)
      .map((v) => String(v))
      .join("/");

    finalPath = `${path}/${values}`;
  }

  window.location.href = finalPath;
}
