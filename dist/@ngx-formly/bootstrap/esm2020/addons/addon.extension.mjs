export function addonsExtension(field) {
    if (!field.props || (field.wrappers && field.wrappers.indexOf('addons') !== -1)) {
        return;
    }
    if (field.props.addonLeft || field.props.addonRight) {
        field.wrappers = [...(field.wrappers || []), 'addons'];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkb24uZXh0ZW5zaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VpL2Jvb3RzdHJhcC9hZGRvbnMvc3JjL2FkZG9uLmV4dGVuc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLFVBQVUsZUFBZSxDQUFDLEtBQXdCO0lBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQy9FLE9BQU87S0FDUjtJQUVELElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7UUFDbkQsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ3hEO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1seUZpZWxkQ29uZmlnIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRvbnNFeHRlbnNpb24oZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnKSB7XG4gIGlmICghZmllbGQucHJvcHMgfHwgKGZpZWxkLndyYXBwZXJzICYmIGZpZWxkLndyYXBwZXJzLmluZGV4T2YoJ2FkZG9ucycpICE9PSAtMSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZmllbGQucHJvcHMuYWRkb25MZWZ0IHx8IGZpZWxkLnByb3BzLmFkZG9uUmlnaHQpIHtcbiAgICBmaWVsZC53cmFwcGVycyA9IFsuLi4oZmllbGQud3JhcHBlcnMgfHwgW10pLCAnYWRkb25zJ107XG4gIH1cbn1cbiJdfQ==