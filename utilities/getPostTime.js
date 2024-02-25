export function getPostTime(createdAt) {
  // if the post was created less than 1 minute ago, return [Number]s ago, else return [Number]m ago, [Number]h ago, [Number]d ago, [Number]w ago, [Number]mo ago, [Number]y ago
  const time = new Date(createdAt);

  const now = new Date();
  const diff = now - time;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return `${seconds}s ago`;
  } else if (minutes < 60) {
    return `${minutes}m ago`;
  } else if (hours < 24) {
    return `${hours}h ago`;
  } else {
    return `${days}d ago`;
  }
}
