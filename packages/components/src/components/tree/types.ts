import type { Generic } from 'adopted-style-sheets';

type RequiredProps = unknown;
type OptionalProps = unknown;

type RequiredStates = RequiredProps;
type OptionalStates = OptionalProps;

export type Props = Generic.Element.Members<RequiredProps, OptionalProps>;
export type States = Generic.Element.Members<RequiredStates, OptionalStates>;
export type API = Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates>;
