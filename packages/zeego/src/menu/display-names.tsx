export const MenuDisplayName = {
  Root: 'Root',
  Item: 'Item',
  Content: 'Content',
  Separator: 'Separator',
  Group: 'Group',
  ItemTitle: 'ItemTitle',
  ItemSubtitle: 'ItemSubtitle',
  ItemIcon: 'ItemIcon',
  ItemImage: 'ItemImage',
  Trigger: 'Trigger',
  SubTrigger: 'SubTrigger',
  Sub: 'Sub',
  SubContent: 'SubContent',
  CheckboxItem: 'CheckboxItem',
  Label: 'Label',
  ItemIndicator: 'ItemIndicator',
  Preview: 'Preview',
  Arrow: 'Arrow',
} as const

type DisplayNames = typeof MenuDisplayName

/**
 * @deprecated Please use `create` instead.
 */
export const menuify = <Props extends any>(
  Component: React.ComponentType<Props>,
  displayName: DisplayNames[keyof DisplayNames]
) => {
  const MenuComponent: React.FC<Props> = (props: Props) => {
    return <Component {...(props as any)} />
  }
  MenuComponent.displayName = displayName

  return MenuComponent
}

export const create = <Props extends any>(
  Component: React.ComponentType<Props>,
  displayName: DisplayNames[keyof DisplayNames]
) => {
  const MenuComponent: React.FC<Props> = (props: Props) => {
    return <Component {...(props as any)} />
  }
  MenuComponent.displayName = displayName

  return MenuComponent
}
