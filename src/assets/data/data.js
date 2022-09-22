/**
 * It returns an object with the following properties: key, icon, children, label, and type.
 * @param label - The text that will be displayed in the menu
 * @param key - The key of the item.
 * @param icon - the icon to be displayed
 * @param children - an array of items
 * @param type - 'item' or 'group'
 * @returns An object with the following properties:
 * key, icon, children, label, type
 */
export function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
