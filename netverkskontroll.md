# **Nettverkskontroll i TrueNAS**

Etter at du har konfigurert **TrueNAS**, kan du setje opp **UniFi Controller** for nettverksadministrasjon.

---

## **Opprette UniFi-konto**
Før du startar oppsettet, må du opprette ein [UniFi-brukar og passord](https://account.ui.com/register?redirect=https%3A%2F%2Fcommunity.ui.com%2Fquestions%2Fcreate-unifi-account%2F69ca4352-3de9-4213-8821-45e511113dc1).  

Når du har **registrert brukarnamn og passord**, kan du starte installasjonen.

---

## **Installere UniFi Controller i TrueNAS**
1. **Gå inn på TrueNAS-serveren**.
2. Naviger til **Apps**.
3. Trykk på **Configuration**.
4. Vel **Choose pool**.
5. Vel den **poolen** du vil bruke.

Vent til app-tenesta startar. Du vil sjå eit **hake-symbol** som stadfestar at ho køyrer.  

Når tenesta køyrer:
1. Venstreklikk på **Discover Apps**.
2. Trykk på **Search**.
3. Søk etter **UniFi**.
4. Vel **UniFi Controller** og installer.

---

## **Konfigurere UniFi Controller**
Når installasjonen er ferdig:
1. **Bla ned til Host Network** og aktiver det.
2. **Certificate ID** må vere sett til **'freenas-default'** for at UniFi-produkt skal visast.
3. Bla ned til **Install** og venstreklikk.

Du vil sjå statusmeldingane **Deploying** og deretter **Running**.  

Når UniFi Controller køyrer:
1. Venstreklikk på **UniFi Controller**.
2. Trykk på **Web-UI**.
3. Logg inn med **UniFi-brukarnamnet og passordet ditt**.

Når du er inne i **UniFi GUI**, kan du konfigurere **UniFi-servernamnet** etter ønskje (t.d. *Skulenett*).  

For å sjekke status:
- Gå til [UniFi Cloud](https://unifi.ui.com/) og sjå om **serveren er aktiv**.  
- Her kan du administrere serveren sjølv om du ikkje er kopla til det lokale nettverket.

---

## **Kople til UniFi-einingar**
Når du har suksessfullt kopla deg til serveren:
1. Trykk på **ikonet med ein sirkel inni** (ser ut som eit aksesspunkt).
2. Sjå at **UniFi-eininga er kopla til same nettverk** som TrueNAS-serveren.

Dersom eininga ikkje er adoptert:
1. Venstreklikk på **Adopt**-knappen.
2. Venstreklikk på UniFi-eininga di.
3. Trykk på tannhjulet for innstillingar.

---

## **Setje opp statisk IP-adresse**
1. Sjå om UniFi-eininga di brukar **DHCP** som standard.
2. Dersom du vil bruke statisk IP:
   - Set **IPv4-adresse** til ein IP innanfor ditt nettverk (anbefalt: IP-adressa som allereie var gitt).
   - Set **Subnet-mask** til `255.255.255.0`.
   - Set **Gateway** til rutaren sin gateway.
   - Set **DNS**:
     - **8.8.8.8** (Google)
     - **8.8.4.4** (Google alternativ)
     - **1.1.1.1** (Cloudflare)
3. Klikk på **Apply Changes** for å lagre innstillingane.

---

## **Konfigurere VLAN**
1. **Trykk på tannhjulet** til venstre.
2. Gå til **Networks**.
3. Trykk på **New Virtual Network**.
4. Vel namn, VLAN-nummer og tryggleiksinnstillingar:
   - **IGMP Snooping**
   - **DHCP Guarding**
5. Trykk **Add**  
Då har du VLAN-et ditt.

---

## **Reglar for VLAN**
1. Trykk på **Profiles**.
2. Trykk på **Create New**.
3. Vel namn (t.d. *Elev*).
4. Vel tilgangen som det VLAN-et skal ha (Tagged VLAN Management).
5. Trykk på **Apply Changes**.
---
Har du spørsmål? ta kontakt på [e-post](mailto:nickeike@outlook.com) eller ring 919 95 753