import React = require("react");

interface PickListItemProps {
    value?: any;
    className?: string;
    template?(): void;
    selected?: boolean;
    onClick?(originalEvent: Event, value: any): void;
}

export class PickListItem extends React.Component<PickListItemProps,any> {}