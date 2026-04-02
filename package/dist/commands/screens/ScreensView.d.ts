interface Screen {
    screenId: string;
    title: string;
    hasCode: boolean;
    codeUrl: string | null;
    hasImage: boolean;
}
interface ScreensViewProps {
    projectId: string;
    projectTitle: string;
    screens: Screen[];
}
export declare function ScreensView({ projectId, projectTitle, screens }: ScreensViewProps): import("react/jsx-runtime").JSX.Element;
export {};
