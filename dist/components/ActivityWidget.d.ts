import { default as React } from 'react';
import { DefaultActivityAdapterParams } from '../hooks/useDefaultActivityAdapter';
export interface ActivityWidgetProps extends DefaultActivityAdapterParams {
    className?: string;
}
export declare const ActivityWidget: React.FC<ActivityWidgetProps>;
export default ActivityWidget;
