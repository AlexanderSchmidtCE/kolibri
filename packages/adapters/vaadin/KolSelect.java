package de.itzbund.oss.kolibri.components;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.dependency.NpmPackage;

/**
 * Die **Select**-Komponente erzeugt eine Auswahlliste, aus der eine oder mehrere vorgegebene Möglichkeiten ausgewählt werden können.
 */

@Tag("kol-select")
@NpmPackage(value = "@public-ui/components", version = "1.6.0-rc.6")
@JsModule("@public-ui/components/dist/components/kol-select")
public class KolSelect extends Component {
	/**
	 * Gibt an, mit welcher Tastenkombination man das interaktive Element der Komponente auslösen oder fokussieren kann.
	 *
	 * @param value Optional<String>
	 */
	public void setAccessKey(final Optional<String> value) {
		getElement().setProperty("_access-key", value);
	}

	/**
	 * Gibt an, mit welcher Tastenkombination man das interaktive Element der Komponente auslösen oder fokussieren kann.
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getAccessKey() {
		return getElement().getProperty("_access-key", null);
	}

	/**
	 * Gibt an, ob der Screenreader die Meldung aktiv vorlesen soll.
	 *
	 * @param value Optional<String>
	 */
	public void setAlert(final Optional<String> value) {
		getElement().setProperty("_alert", value);
	}

	/**
	 * Gibt an, ob der Screenreader die Meldung aktiv vorlesen soll.
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getAlert() {
		return getElement().getProperty("_alert", null);
	}

	/**
	 * Deaktiviert das interaktive Element in der Komponente und erlaubt keine Interaktion mehr damit.
	 *
	 * @param value Optional<String>
	 */
	public void setDisabled(final Optional<String> value) {
		getElement().setProperty("_disabled", value);
	}

	/**
	 * Deaktiviert das interaktive Element in der Komponente und erlaubt keine Interaktion mehr damit.
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getDisabled() {
		return getElement().getProperty("_disabled", null);
	}

	/**
	 * Gibt den Text für eine Fehlermeldung an.
	 *
	 * @param value Optional<String>
	 */
	public void setError(final Optional<String> value) {
		getElement().setProperty("_error", value);
	}

	/**
	 * Gibt den Text für eine Fehlermeldung an.
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getError() {
		return getElement().getProperty("_error", null);
	}

	/**
	 * Gibt an, ob eine individuelle Höhe übergeben werden soll.
	 *
	 * @param value Optional<String>
	 */
	public void setHeight(final Optional<String> value) {
		getElement().setProperty("_height", value);
	}

	/**
	 * Gibt an, ob eine individuelle Höhe übergeben werden soll.
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getHeight() {
		return getElement().getProperty("_height", null);
	}

	/**
	 * Blendet die Beschriftung (Label) aus und zeigt sie stattdessen mittels eines Tooltips an.
	 *
	 * @param value Optional<String>
	 */
	public void setHideLabel(final Optional<String> value) {
		getElement().setProperty("_hide-label", value);
	}

	/**
	 * Blendet die Beschriftung (Label) aus und zeigt sie stattdessen mittels eines Tooltips an.
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getHideLabel() {
		return getElement().getProperty("_hide-label", null);
	}

	/**
	 * Gibt den Hinweistext an.
	 *
	 * @param value Optional<String>
	 */
	public void setHint(final Optional<String> value) {
		getElement().setProperty("_hint", value);
	}

	/**
	 * Gibt den Hinweistext an.
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getHint() {
		return getElement().getProperty("_hint", null);
	}

	/**
	 * Setzt die Iconklasse (z.B.: `_icon="codicon codicon-home`).
	 *
	 * @param value Optional<String>
	 */
	public void setIcon(final Optional<String> value) {
		getElement().setProperty("_icon", value);
	}

	/**
	 * Setzt die Iconklasse (z.B.: `_icon="codicon codicon-home`).
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getIcon() {
		return getElement().getProperty("_icon", null);
	}

	/**
	 * Gibt die interne ID des primären Elements in der Komponente an.
	 *
	 * @param value Optional<String>
	 */
	public void setId(final Optional<String> value) {
		getElement().setProperty("_id", value);
	}

	/**
	 * Gibt die interne ID des primären Elements in der Komponente an.
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getId() {
		return getElement().getProperty("_id", null);
	}

	/**
	 * Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.).
	 *
	 * @param value String
	 */
	public void setLabel(final Optional<String> value) {
		getElement().setProperty("_label", value);
	}

	/**
	 * Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.).
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getLabel() {
		return getElement().getProperty("_label", null);
	}

	/**
	 * Gibt den technischen Namen des Eingabefeldes an.
	 *
	 * @param value String
	 */
	public void setList(final Optional<String> value) {
		getElement().setProperty("_list", value);
	}

	/**
	 * Gibt den technischen Namen des Eingabefeldes an.
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getList() {
		return getElement().getProperty("_list", null);
	}

	/**
	 * Gibt an, ob mehrere Werte eingegeben werden können.
	 *
	 * @param value Optional<String>
	 */
	public void setMultiple(final Optional<String> value) {
		getElement().setProperty("_multiple", value);
	}

	/**
	 * Gibt an, ob mehrere Werte eingegeben werden können.
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getMultiple() {
		return getElement().getProperty("_multiple", null);
	}

	/**
	 * Gibt den technischen Namen des Eingabefeldes an.
	 *
	 * @param value Optional<String>
	 */
	public void setName(final Optional<String> value) {
		getElement().setProperty("_name", value);
	}

	/**
	 * Gibt den technischen Namen des Eingabefeldes an.
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getName() {
		return getElement().getProperty("_name", null);
	}

	/**
	 * Macht das Eingabeelementzu einem Pflichtfeld.
	 *
	 * @param value Optional<String>
	 */
	public void setRequired(final Optional<String> value) {
		getElement().setProperty("_required", value);
	}

	/**
	 * Macht das Eingabeelementzu einem Pflichtfeld.
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getRequired() {
		return getElement().getProperty("_required", null);
	}

	/**
	 * Wechselt das Eingabeelement in den Auswahlfeld modus und setzt die Höhe des Feldes.
	 *
	 * @param value Optional<String>
	 */
	public void setSize(final Optional<String> value) {
		getElement().setProperty("_size", value);
	}

	/**
	 * Wechselt das Eingabeelement in den Auswahlfeld modus und setzt die Höhe des Feldes.
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getSize() {
		return getElement().getProperty("_size", null);
	}

	/**
	 * Gibt an, welchen Tab-Index das primäre Element in der Komponente hat. (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)
	 *
	 * @param value Optional<String>
	 */
	public void setTabIndex(final Optional<String> value) {
		getElement().setProperty("_tab-index", value);
	}

	/**
	 * Gibt an, welchen Tab-Index das primäre Element in der Komponente hat. (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getTabIndex() {
		return getElement().getProperty("_tab-index", null);
	}

	/**
	 * Gibt an, ob dieses Eingabefeld von Nutzer:innen einmal besucht/berührt wurde.
	 *
	 * @param value Optional<String>
	 */
	public void setTouched(final Optional<String> value) {
		getElement().setProperty("_touched", value);
	}

	/**
	 * Gibt an, ob dieses Eingabefeld von Nutzer:innen einmal besucht/berührt wurde.
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getTouched() {
		return getElement().getProperty("_touched", null);
	}

	/**
	 * Gibt den Wert des Eingabefeldes an.
	 *
	 * @param value Optional<String>
	 */
	public void setValue(final Optional<String> value) {
		getElement().setProperty("_value", value);
	}

	/**
	 * Gibt den Wert des Eingabefeldes an.
	 *
	 * @return Optional<String>
	 */
	public Optional<String> getValue() {
		return getElement().getProperty("_value", null);
	}
}
