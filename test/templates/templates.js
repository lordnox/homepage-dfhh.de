angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('scripts/modules/app/templates/layout-footer.html',
    "\n" +
    "<div id=\"footerContent\">\n" +
    "  <div class=\"footer left\"><a ui-sref=\"app.impressum\">Impressum</a></div>\n" +
    "  <div class=\"footer right\"><a target=\"_blank\" href=\"https://de-de.facebook.com/pages/Discofox-Club-Hamburg/218933408204965?sk=wall&filter=12\" target=\"_blank\">Facebook</a></div>\n" +
    "  <div class=\"footer center\">© 2013 Discofox-Hamburg.de - <a href=\"mailto:martina.hayward@web.de\">Martina Hayward</a> - Alle Rechte vorbehalten.</div>\n" +
    "</div>\n"
  );


  $templateCache.put('scripts/modules/app/templates/layout-navigation.html',
    "<ul class=\"sf-menu sf-vertical\">\n" +
    "  <li ng-repeat=\"item in menu\">\n" +
    "    <a ui-sref=\"{{item.name}}\" ui-sref-active=\"active\">{{item.name + \".menuName\" | translate}}</a>\n" +
    "  </li>\n" +
    "</ul>"
  );


  $templateCache.put('scripts/modules/app/templates/page-anmeldungen.html',
    "<div id=\"title\"><p>Anmeldung</p></div>\n" +
    "<p>&nbsp;</p>\n" +
    "<p>&nbsp;</p>\n" +
    "<form action=\"kontaktformular-auswerten.php\" method=\"post\">\n" +
    "<table width=\"740\" border=\"0\" align=\"center\" cellpadding=\"4\" cellspacing=\"6\" style=\"padding:10px;\">\n" +
    "<tr>\n" +
    "  <td width=\"150\"><span class=\"Stil5\">Vorname*:</span></td>\n" +
    "  <td><input name=\"Vorname\" type=\"text\" id=\"Vorname\" size=\"30\" /></td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "  <td><span class=\"Stil5\">Nachname*:</span></td>\n" +
    "  <td><input name=\"Nachname\" type=\"text\" id=\"Nachname\" size=\"30\" /></td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "  <td><span class=\"Stil5\">Telefon* : </span></td>\n" +
    "  <td><input name=\"Telefon\" type=\"text\" id=\"Telefon\" size=\"30\" /></td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "  <td><span class=\"Stil5\">eMail:</span></td>\n" +
    "  <td><input name=\"Email\" type=\"text\" size=\"30\" /></td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "  <td></td>\n" +
    "  <td></td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "  <td></td>\n" +
    "  <td></td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "  <td valign=\"top\"><p class=\"Stil5\">Bitte nennen Sie uns den <strong>gew&uuml;nschten Kurs oder Workshop</strong>, an dem Sie teilnehmen m&ouml;chten.</p>    </td>\n" +
    "  <td><span class=\"Stil5\">\n" +
    "    <textarea cols=\"55\" name=\"Nachricht\" rows=\"10\"></textarea>\n" +
    "  </span></td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "  <td>&nbsp;</td>\n" +
    "  <td><p><span class=\"Stil5\">\n" +
    "      <input name=\"Send\" type=\"submit\" value=\"Abschicken\" />\n" +
    "      <input name=\"Reset\" type=\"reset\" value=\"L&ouml;schen\" />\n" +
    "  </span></p>\n" +
    "    </td>\n" +
    "</tr>\n" +
    "</table>\n" +
    "</form>\n" +
    "<p>&nbsp;</p>\n" +
    "<p>&nbsp;</p>\n" +
    "</div>\n"
  );


  $templateCache.put('scripts/modules/app/templates/page-discofox.html',
    "\n" +
    "<div id=\"title\"><p>Discofox</p></div>\n" +
    "<p>&nbsp;</p>\n" +
    "<table width=\"790\" border=\"0\" align=\"center\" cellpadding=\"5\" cellspacing=\"6\">\n" +
    "\n" +
    "<tr>\n" +
    "<td><p>Ob  Tanzparty, Abiball oder Hochzeitsfeier - <strong>Discofox wird überall getanzt</strong>.\n" +
    "Wer einfach einmal in diesen Tanz  „hineinschnuppern“ möchte, oder ein paar Tricks\n" +
    "und Figuren speziell für die  Diskothek oder Hochzeitsfeier benötigt, ist hier richtig.</p>\n" +
    "<p>&nbsp;</p>\n" +
    "<p>Bei uns gibt es aber  auch die Möglichkeit, diesen Tanz von Anfang an mit der\n" +
    "richtigen Technik zu  erlernen, denn nur mit richtiger Körperbewegung und Technik\n" +
    "sehen die  kniffligen Wickelfiguren auch wirklich gut aus. In den Einsteigerkursen\n" +
    "werden Figuren für die Diskothek oder die private Feier unterrichtet.\n" +
    "Wer dann auf den  Geschmack gekommen ist, kann es mit dem Turniertraining versuchen. </p>\n" +
    "<p>&nbsp;</p>\n" +
    "<p><strong>Wir lieben  diesen Tanz</strong>, deshalb haben wir eine leistungsstarke Turniergruppe.\n" +
    "  <strong>Qualität ist  uns sehr wichtig</strong>, aus diesem Grund bieten wir viele Trainingsmöglichkeiten.\n" +
    "  <strong>Hier macht Tanzen Spaß.</strong></p>\n" +
    "<p><br />\n" +
    "  <strong>Die Tanzkurse für Discofox kosten 75 € pro Person und laufen jeweils  über 6 Wochen.</strong></p>\n" +
    "<p>Für Paare, die längerfristig  tanzen wollen und Schüler / Studenten, gibt es einen attraktiven Clubbeitrag.</p>\n" +
    "<p>&nbsp;</p>\n" +
    "<p>Zur Anmeldung und für weitere Informationen zum jeweiligen Veranstaltungsort, melden Sie sich bitte bei:</p>\n" +
    "<p><strong>Martina Hayward </strong>per<strong> <a href=\"mailto:martina.hayward@web.de\">E-Mail</a></strong>, unter <strong class=\"style2\">0176 / 81 81 42 20</strong> oder, zunächst unverbindlich, über das <a href=\"kontakt.html\"><strong>Anmeldeformular</strong></a> an. Sie erhalten dann alle Informationen zum jeweiligen Kurs.</p></td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "<td></td>\n" +
    "</tr>\n" +
    "</table>\n" +
    "\n" +
    "\n" +
    "<p>&nbsp;</p>\n" +
    "<table width=\"790\" border=\"0\" align=\"center\" cellpadding=\"5\" cellspacing=\"6\">\n" +
    "<tr>\n" +
    "<td width=\"170\" valign=\"top\"><span class=\"style2\"><strong>Hobbykurse:</strong></span></td>\n" +
    "<td width=\"170\" valign=\"top\"><strong>Montags:</strong></td>\n" +
    "<td><p>19.30 -  20.30 Uhr</p>\n" +
    "  <p>Veranstaltungsort:  Wandsbek</p></td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "  <td>&nbsp;</td>\n" +
    "  <td valign=\"top\"><strong>Donnerstags:</strong></td>\n" +
    "  <td><p>19.00 -  20.00 Uhr</p>\n" +
    "    <p>Veranstaltungsort:  Wandsbek</p></td>\n" +
    "</tr>\n" +
    "</table>\n" +
    "<p>&nbsp;</p>\n" +
    "<table width=\"790\" border=\"0\" align=\"center\" cellpadding=\"5\" cellspacing=\"6\">\n" +
    "\n" +
    "<tr>\n" +
    "<td width=\"170\"><strong class=\"style2\">Turniertraining:</strong></td>\n" +
    "<td width=\"170\"><strong>Donnerstags:</strong></td>\n" +
    "<td>20.00 - 21.00 Uhr</td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "  <td>&nbsp;</td>\n" +
    "  <td><strong>Sonntags:</strong></td>\n" +
    "  <td>20.00 - 21.00 Uhr</td>\n" +
    "</tr>\n" +
    "</table>\n" +
    "<p>&nbsp;</p>\n" +
    "<table width=\"790\" border=\"0\" align=\"center\" cellpadding=\"5\" cellspacing=\"6\">\n" +
    "  <tr>\n" +
    "    <td width=\"170\"><span class=\"style2\"><strong>Freies Training</strong></span></td>\n" +
    "    <td width=\"170\"><strong>Montags:</strong></td>\n" +
    "    <td>20.30 - 21.30 Uhr</td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td width=\"170\">&nbsp;</td>\n" +
    "    <td width=\"170\"><strong>Mittwochs:</strong></td>\n" +
    "    <td>19.00 - 20.00 Uhr</td>\n" +
    "  </tr>\n" +
    "  </table>\n" +
    "<p>&nbsp;</p>\n" +
    "<p>&nbsp;</p>\n" +
    "<p>&nbsp;</p>\n" +
    "<p>&nbsp;</p>\n" +
    "</div>\n"
  );


  $templateCache.put('scripts/modules/app/templates/page-impressum.html',
    "<div id=\"title\"><p>Impressum</p></div>\n" +
    "\n" +
    "<table class=\"data\">\n" +
    "\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p><span class=\"style2\"><strong>Martina Hayward</strong></span></p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <p>Bovestraße 37</p>\n" +
    "      <p>22043 Hamburg</p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p>Tel.: 0176 / 81 81 42 20</p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p>Steuer-ID-Nr.: 46 / 089 / 00948</p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>&nbsp;</td>\n" +
    "    <td><p><a href=\"mailto:martina.hayward@web.de\">martina.hayward@web.de</a></p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>&nbsp;</td>\n" +
    "    <td>\n" +
    "      <p><a href=\"www.discofox-hamburg.de\">www.discofox-hamburg.de</a></p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "</table>\n" +
    "\n" +
    "<table class=\"data\">\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p><span class=\"style2\"><strong>Webdesign &amp; Fotos</strong></span></p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <p><strong>ViewStudio</strong></p>\n" +
    "      <p>Maris Stoeppler</p>\n" +
    "      <p>Bahrenfelder Chaussee 94</p>\n" +
    "      <p>22761 Hamburg</p>\n" +
    "      <p><a href=\"http://www.viewstudio.de\" target=\"_blank\">www.viewstudio.de</a></p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "</table>\n" +
    "\n" +
    "<table class=\"data\">\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p><span class=\"style2\"><strong>Haftungs&shy;ausschluss</strong></span></p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <p><strong>1. Inhalt des Onlineangebotes</strong></p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>&nbsp;</td>\n" +
    "    <td>\n" +
    "      <p>Der   Autor übernimmt keinerlei Gewähr für die  Aktualität, Korrektheit,\n" +
    "        Vollständigkeit oder Qualität der bereitgestellten Informationen.\n" +
    "        Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller\n" +
    "        Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen\n" +
    "        bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht\n" +
    "        wurden sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein nachweislich\n" +
    "        vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind freibleibend\n" +
    "        und unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder\n" +
    "        das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen\n" +
    "        oder die Veröffentlichung zeitweise   oder endgültig einzustellen.\n" +
    "      </p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>&nbsp;</td>\n" +
    "    <td>\n" +
    "      <p><strong>2. Verweise und Links </strong></p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>&nbsp;</td>\n" +
    "    <td>\n" +
    "      <p>\n" +
    "        Bei direkten oder indirekten Verweisen auf fremde Internetseiten (&quot;Links&quot;),\n" +
    "        die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung\n" +
    "        ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat\n" +
    "        und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte\n" +
    "        zu verhindern. Der Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung\n" +
    "        die entsprechenden verlinkten Seiten frei von illegalen Inhalten waren.\n" +
    "        Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der gelinkten /\n" +
    "        verknüpften Seiten hat der Autor keinerlei Einfluss. Deshalb distanziert er sich hiermit\n" +
    "        ausdrücklich von allen Inhalten aller gelinkten / verknüpften Seiten, die nach der Linksetzung\n" +
    "        verändert wurden. Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes\n" +
    "        gesetzten Links und Verweise sowie für Fremdeinträge in vom Autor eingerichteten Gästebüchern,\n" +
    "        Diskussionsforen und Mailinglisten. Für illegale, fehlerhafte oder unvollständige Inhalte und\n" +
    "        insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener\n" +
    "        Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde,\n" +
    "        nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.\n" +
    "      </p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>&nbsp;</td>\n" +
    "    <td>\n" +
    "      <p><strong>3. Urheber- und Kennzeichenrecht </strong></p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>&nbsp;</td>\n" +
    "    <td>\n" +
    "      <p>\n" +
    "        Der   Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken,\n" +
    "        Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte   Grafiken, Tondokumente,\n" +
    "        Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen\n" +
    "        und Texte zurückzugreifen. Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte\n" +
    "        geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen\n" +
    "        Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein aufgrund\n" +
    "        der bloßen Nennung ist nicht der Schluss zu ziehen, dass Markenzeichen nicht durch Rechte Dritter\n" +
    "        geschützt sind! Das Copyright für veröffentlichte, vom Autor selbst erstellte Objekte bleibt allein\n" +
    "        beim Autor der Seiten. Eine Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente,\n" +
    "        Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne\n" +
    "        ausdrückliche Zustimmung des Autors nicht gestattet.\n" +
    "      </p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>&nbsp;</td>\n" +
    "    <td>\n" +
    "      <p><strong>4. Datenschutz </strong></p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>&nbsp;</td>\n" +
    "    <td>\n" +
    "      <p>\n" +
    "        Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder geschäftlicher Daten\n" +
    "        (Emailadressen, Namen, Anschriften) besteht, so erfolgt die Preisgabe dieser Daten seitens des Nutzers auf\n" +
    "        ausdrücklich freiwilliger Basis. Die Inanspruchnahme und Bezahlung aller angebotenen Dienste ist -\n" +
    "        soweit technisch möglich und zumutbar - auch ohne Angabe solcher Daten bzw. unter Angabe anonymisierter\n" +
    "        Daten oder eines   Pseudonyms gestattet. Kundenbezogene Daten werden ausschließlich für die eigene Kundenpflege\n" +
    "        (Zusendung von Informationen) verwendet. Die Weitergabe an Dritte ist Ausgeschlossen.\n" +
    "        Der Kunde stimmt der Verwendung seiner Daten in diesem Sinne zu.\n" +
    "      </p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>&nbsp;</td>\n" +
    "    <td>\n" +
    "      <p><strong>5. Rechtswirksamkeit dieses Haftungsausschlusses </strong></p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>&nbsp;</td>\n" +
    "    <td>\n" +
    "      <p>\n" +
    "        Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten,\n" +
    "        von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen\n" +
    "        dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig\n" +
    "        entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und\n" +
    "        ihrer Gültigkeit davon unberührt.\n" +
    "      </p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "</table>\n"
  );


  $templateCache.put('scripts/modules/app/templates/page-news.html',
    "<div id=\"title\"><p>News</p></div>\n" +
    "\n" +
    "<table class=\"content\">\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p class=\"style2\"><strong>Herzlich Willkommen bei Discofox-Hamburg.de</strong></p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p>Unsere Tanzschule hat sich auf die Tänze<strong> <a href=\"discofox.html\">Discofox</a></strong> und <strong><a href=\"westcoastswing.html\">West Coast Swing</a> </strong> spezialisiert. Wir bieten abgeschlossene Tanzkurse für Anfänger und Fortgeschrittene an. Für diejenigen, die länger tanzen wollen, gibt es einen attraktiven Clubbeitrag.</p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p><strong>Haben wir Ihr Interesse geweckt?</strong></p>\n" +
    "      <p>Für weitere Fragen, melden Sie sich gerne Montags bis Samstags von 16.00 bis 18.00 Uhr bei:</p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p>\n" +
    "        <strong>Martina Hayward</strong> unter <strong class=\"style2\">0176 / 81 81 42 20</strong> oder senden Sie eine E-Mail an: <a href=\"mailto:martina.hayward@web.de\"><strong>martina.hayward@web.de</strong></a>\n" +
    "      </p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p>\n" +
    "        Alternativ können Sie auch unser Online-Formular unter <a href=\"kontakt.html\"><strong>Anmeldung</strong></a> nutzen.\n" +
    "      </p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "</table>\n" +
    "\n" +
    "<table class=\"data\">\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <strong class=\"style2\">Neu!</strong>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <p>\n" +
    "        <strong>Lady / Men Styling</strong>\n" +
    "      </p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>&nbsp;</td>\n" +
    "    <td valign=\"top\">\n" +
    "      <p>Neu im Programm ist unser Lady / Men Styling. Drehungen, Armbewegungen, Isolationen, Grundschrittvariationen. Das alles übt man am besten erst einmal allein.</p>\n" +
    "      <p>\n" +
    "        <strong><a href=\"styling.html\">&gt; Zu den Terminen</a></strong>\n" +
    "      </p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "</table>\n" +
    "\n" +
    "<table class=\"data\">\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <span class=\"style2\"><strong>Discofox</strong></span>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <strong>Neue Termine für Einsteiger-Workshops\n" +
    "      </strong>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>&nbsp;</td>\n" +
    "    <td>\n" +
    "      <p>Hier lernst du den Grundschritt und einfache Schrittkombinationen mit der dazugehörigen Technik.</p>\n" +
    "      <p>Jeweils in der Zeit von 11.00 bis 14.00 Uhr. Keine Angst, so schwer ist das gar nicht.</p>\n" +
    "      <p>\n" +
    "        <br />\n" +
    "        <strong>Termine:</strong>\n" +
    "        <br />\n" +
    "        18. Januar 2014<br />\n" +
    "        15. Februar 2014\n" +
    "      </p>\n" +
    "      <p>15. März 2014</p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p><strong>7. Dezember 2013</strong></p>\n" +
    "      <p>\n" +
    "        <strong>Workshop Special für Clubmitglieder:</strong>\n" +
    "        <br />\n" +
    "        Stephan Guttenberger, einer der erfolgreichsten Discofox Tänzer überhaupt, zeigt unseren Turnierpaaren, wie sie noch besser werden können.\n" +
    "      </p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "</table>\n" +
    "\n" +
    "<table class=\"data info\">\n" +
    "  <tr>\n" +
    "    <td><span class=\"style2\"><strong>West Coast Swing</strong></span></td>\n" +
    "    <td><p><strong>Workshop für Einsteiger</strong></p></td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>&nbsp;</td>\n" +
    "    <td><p>Hier lernst du den Grundschritt und einfache Schrittkombinationen mit der dazugehörigen Technik. Dieser Workshop ist auch für Paare geeignet, die Sicherheit gewinnen wollen. Jeweils in der Zeit von 11.00 bis 14.00 Uhr.</p>\n" +
    "      <p>\n" +
    "        <br />\n" +
    "        <strong>Termine:</strong><br />\n" +
    "        18. Januar 2014<br />\n" +
    "        15. Februar 2014<br />\n" +
    "        15. März 2014\n" +
    "      </p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p><strong>Monatliche Workshops für Fortgeschrittene:</strong></p>\n" +
    "      <p>Immer montags von 21.00 bis 22.30 Uhr</p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p><strong class=\"style2\">02.12.2013 &amp;</strong></p>\n" +
    "      <p class=\"style2\"><strong>11.01.2014</strong></p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <strong>&ldquo;After Workshop&rdquo; Catriona Wiles und Paul Wardon</strong>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p class=\"style3\">11.00-14.00 Uhr</p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <p>Die Inhalte des Intensiv Workshops vom August 2013 werden wiederholt und vertieft. </p>\n" +
    "      <p>Workshopteilnehmer zahlen 15 € pro Person. Wer nicht dabei war, zahlt 35 € pro Person.</p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td class=\"style2\">\n" +
    "      <p><strong class=\"style2\">16.12.2013 &amp;</strong></p>\n" +
    "      <p><strong>08.02.2014</strong></p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <strong>&bdquo;After Workshop&ldquo; Chuck Brown</strong>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p><span class=\"style3\">11.00-14.00 Uhr</span></p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <p>Die Inhalte des Workshops werden wiederholt. Dies geschieht besonders im Hinblick auf <strong>Technik</strong>.</p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p><strong class=\"style2\">21.12.2013</strong></p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <p><strong>West Coast Swing Intensiv</strong></p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>&nbsp;</td>\n" +
    "    <td>\n" +
    "      <p>West Coast Swing Intensiv mit &bdquo;The Man&ldquo; Douglas aus den USA in der Zeit von 11.00 bis 15.00 Uhr im &bdquo;Tango Chocolate&ldquo;.</p>\n" +
    "      <p class=\"style2\"><strong>SOLD OUT</strong></p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "</table>\n"
  );


  $templateCache.put('scripts/modules/app/templates/page-styling.html',
    "\n" +
    "<div id=\"title\"><p>Lady / Men Styling</p></div>\n" +
    "\n" +
    "<table class=\"content\">\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p><strong>Neu im  Programm ist unser Lady / Men Styling.</strong></p>\n" +
    "      <p>Drehungen, Armbewegungen, Isolationen,  Grundschrittvariationen. Das alles übt man am besten erst einmal allein. </p>\n" +
    "      <p>In diesem Kurs haben Sie dazu die Möglichkeit.</p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p>Zur Anmeldung und für weitere Informationen zum jeweiligen Veranstaltungsort, melden Sie sich bitte bei:</p>\n" +
    "      <p><strong>Martina Hayward </strong>per<strong> <a href=\"mailto:martina.hayward@web.de\">E-Mail</a></strong>, unter <strong class=\"style2\">0176 / 81 81 42 20</strong> oder, zunächst unverbindlich, über das <a href=\"kontakt.html\"><strong>Anmeldeformular</strong></a> an. Sie erhalten dann alle Informationen zum jeweiligen Kurs.</p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "</table>\n" +
    "\n" +
    "\n" +
    "<table class=\"data time\">\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p class=\"style2\"><strong>Lady / Menstyling:</strong></p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <p><strong>Mittwochs:</strong></p>\n" +
    "    </td>\n" +
    "    <td><p>21.00 - 22.00  Uhr (durchgehend)</p> Veranstaltungsort: Wandsbek</td>\n" +
    "  </tr>\n" +
    "</table>\n" +
    "\n"
  );


  $templateCache.put('scripts/modules/app/templates/page-trainerin.html',
    "\n" +
    "<div id=\"title\"><p>Trainerin</p></div>\n" +
    "\n" +
    "<table class=\"content\">\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p><strong>Martina Hayward</strong> tanzte sich im Alter von 17 Jahren als Norddeutscher Meister der A-Klasse auf Anhieb in das Finale von Blackpool, einem hochrangigen Tanzturnier. </p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p>Mit 22 Jahren beschloss sie dann mit dem  Leistungssport aufzuhören, neugierig studierte sie Geschichte und Russisch. </p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p>Später wechselte sie zu Diplompädagogik mit dem Schwerpunkt Pädagogische Psychologie an der Universität Hamburg. Theaterarbeit, Atemtechnik und der  bewusste Umgang mit Körpersprache prägen ihre Arbeit. Martina ist ausgebildete  Farb-, Image- und Stilberaterin. </p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p><strong>&quot;Seit über 20 Jahren arbeite ich als Tanzlehrerin. In den  letzten Jahren habe ich mich auf die Tänze West Coast Swing und Discofox  spezialisiert. Da ich selbst bis in die höchste deutsche Turnierklasse  (S-Klasse) getanzt habe, weiß ich, wie viel Zeit Turnierpaare in das Tanzen investieren. </strong></p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p><strong>Da aber Zeit unser kostbarstes Gut ist, habe ich ein Konzept  entwickelt, hochklassiges Tanzen in kürzerer Zeit zu vermitteln. Wirklich  effektiv ist dies fast nur über Privatunterricht möglich aber auch in meinen  Tanzkursen erreiche ich erstaunliche Ergebnisse und andere Trainer sind immer  wieder überrascht, mit welcher Geschwindigkeit sich meine Paare entwickeln.&quot;</em></strong></p>\n" +
    "      <p>&nbsp;</p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <p><img src=\"pics/martina_hayward2.jpg\" alt=\"Martina Hayward\" width=\"250\" height=\"364\" /></p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "</table>\n" +
    "\n"
  );


  $templateCache.put('scripts/modules/app/templates/page-veranstaltungen.html',
    "<div id=\"title\"><p>Veranstaltungen</p></div>\n" +
    "\n" +
    "<table class=\"content\">\n" +
    "  <tr>\n" +
    "    <td align=\"center\" class=\"style2\">\n" +
    "      <p><strong>Zur Zeit sind keine Veranstaltungen geplant.</strong><strong></strong></p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "</table>\n"
  );


  $templateCache.put('scripts/modules/app/templates/page-westcoastswing.html',
    "\n" +
    "<div id=\"title\"><p>West Coast Swing</p></div>\n" +
    "\n" +
    "<table class=\"content\">\n" +
    "\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p>Noch vor ein paar Jahren wusste kaum jemand, was mit diesem  Tanz gemeint ist. Nun setzt er sich mehr und mehr auch in Europa durch. In  England und Frankreich gibt es mittlerweile eine sehr große West Coast Swing  Szene. In Deutschland ist dieser Tanz immer noch ein Geheimtipp, aber wahrscheinlich bald schon, <strong>der Tanz der Zukunft</strong>.</p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p>Der West Coast Swing hat etwas von Discofox,  Blues, Salsa und ist doch ganz anders, mit zwei Worten – <strong>natürlich und cool</strong>.  Wir bieten <strong>5 x pro Woche</strong> die Möglichkeit, diesen Tanz zu erlernen und es lohnt  sich.</p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p><strong>Die Tanzkurse für West Coast Swing kosten 75 € pro Person und laufen  jeweils über 6 Wochen.</strong></p>\n" +
    "      <p>Für Paare, die längerfristig  tanzen wollen und Schüler / Studenten, gibt es einen attraktiven Clubbeitrag.</p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p>Zur Anmeldung und für weitere Informationen zum jeweiligen Veranstaltungsort, melden Sie sich bitte bei:</p>\n" +
    "      <p><strong>Martina Hayward </strong>per<strong> <a href=\"mailto:martina.hayward@web.de\">E-Mail</a></strong>, unter <strong class=\"style2\">0176 / 81 81 42 20</strong> oder, zunächst unverbindlich, über das <a href=\"kontakt.html\"><strong>Anmeldeformular</strong></a> an. Sie erhalten dann alle Informationen zum jeweiligen Kurs.</p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "</table>\n" +
    "\n" +
    "\n" +
    "<table class=\"data time\">\n" +
    "  <tr>\n" +
    "    <td><span class=\"style2\"><strong>Beginner (Anfänger):</strong></span></td>\n" +
    "    <td><strong>Montags:</strong></td>\n" +
    "    <td><p>20.00 - 21.00  Uhr</p></td>\n" +
    "  </tr>\n" +
    "</table>\n" +
    "\n" +
    "<table class=\"data time\">\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p><span class=\"style2\"><strong>Intermediate (Mittelstufe):</strong></span></p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <p><strong>Mittwochs:</strong></p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <p>19.00 - 20.00 Uhr</p>\n" +
    "      <p>Veranstaltungsort:  Wandsbek</p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "</table>\n" +
    "\n" +
    "<table class=\"data time\">\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p><span class=\"style2\"><strong>Übungszeit:</strong></span></p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <p><strong>Mittwochs:</strong></p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <p>20.00 - 21.00 Uhr</p>\n" +
    "      <p>Veranstaltungsort:  Wandsbek</p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "</table>\n" +
    "\n" +
    "<table class=\"data time\">\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p class=\"style2\"><strong>Monatlicher Workshop:</strong></p>\n" +
    "      <p class=\"style2\">(Termine &amp; Themen: </p>\n" +
    "      <p class=\"style2\">siehe <a href=\"workshops.html\">Workshops</a><strong>)</strong></p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <p><strong>Montags:</strong></p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <p>21.00 - 22.30 Uhr</p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "</table>\n" +
    "\n" +
    "<table class=\"data time\">\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p><span class=\"style2\"><strong>Advanced (Fortgeschritten):</strong></span></p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <p><strong>Dienstags:</strong></p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <p>20.00 - 21.30 Uhr (durchgehend)</p>\n" +
    "      <p>Veranstaltungsort:  Eimsbüttel</p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "</table>\n"
  );


  $templateCache.put('scripts/modules/app/templates/page-workshops.html',
    "\n" +
    "<div id=\"title\"><p>Workshops</p></div>\n" +
    "\n" +
    "<table class=\"content\">\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p>Wir bieten für alle, die schnell tanzen lernen wollen, Workshops für Discofox und West Coast Swing an. Die Workshops laufen jeweils über drei Stunden. Es werden grundlegende Kenntnisse vermittelt, aber auch schon ein paar spektakuläre Figuren gezeigt.</p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p>Zu jedem Workshop kann man sich auch allein anmelden. Wir versuchen dann, einen Tanzpartner zu finden.</p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p><strong>Die Kurse finden von 13.00 bis 16.00 bzw. von 16.00 bis 19.00 Uhr statt und kosten 40 € pro Person.</strong></p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p><strong>Veranstaltungsort:</strong> Kulturschloss Wandsbek, Königsreihe 4, Hamburg-Wandsbek</p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p>Zur Anmeldung und für weitere Informationen zum jeweiligen Veranstaltungsort, melden Sie sich bitte bei:</p>\n" +
    "      <p><strong>Martina Hayward </strong>per<strong> <a href=\"mailto:martina.hayward@web.de\">E-Mail</a></strong>, unter <strong class=\"style2\">0176 / 81 81 42 20</strong> oder, zunächst unverbindlich, über das <a href=\"kontakt.html\"><strong>Anmeldeformular</strong></a> an.</p>\n" +
    "      <p>Sie erhalten dann alle Informationen zum jeweiligen Kurs.</p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "</table>\n" +
    "\n" +
    "<table class=\"data info\">\n" +
    "  <tr>\n" +
    "    <td><span class=\"style2\"><strong>Discofox</strong></span></td>\n" +
    "    <td><strong>Workshop für Einsteiger</strong></td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>&nbsp;</td>\n" +
    "    <td>\n" +
    "      <p>Hier lernst du den Grundschritt und einfache Schrittkombinationen mit der dazugehörigen Technik.</p>\n" +
    "      <p>Jeweils in der Zeit von 11.00 bis 14.00 Uhr. Keine Angst, so schwer ist das gar nicht.</p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p>\n" +
    "        <strong>Termine:</strong><br />\n" +
    "        18. Januar 2014<br />\n" +
    "        15. Februar 2014\n" +
    "      </p>\n" +
    "      <p>15. März 2014</p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p><strong>7. Dezember 2013 </strong></p>\n" +
    "      <p><strong>Workshop Special für Clubmitglieder:</strong><br /> Stephan Guttenberger, einer der erfolgreichsten Discofox Tänzer überhaupt, zeigt unseren Turnierpaaren, wie sie noch besser werden können.</p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "</table>\n" +
    "\n" +
    "<table class=\"data info\">\n" +
    "  <tr>\n" +
    "    <td><span class=\"style2\"><strong>West Coast Swing</strong></span></td>\n" +
    "    <td><p><strong>Workshop für Einsteiger</strong></p></td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>&nbsp;</td>\n" +
    "    <td><p>Hier lernst du den Grundschritt und einfache Schrittkombinationen mit der dazugehörigen Technik. Dieser Workshop ist auch für Paare geeignet, die Sicherheit gewinnen wollen. Jeweils in der Zeit von 11.00 bis 14.00 Uhr.</p>\n" +
    "      <p>\n" +
    "        <br />\n" +
    "        <strong>Termine:</strong><br />\n" +
    "        18. Januar 2014<br />\n" +
    "        15. Februar 2014<br />\n" +
    "        15. März 2014\n" +
    "      </p>\n" +
    "      <p>&nbsp;</p>\n" +
    "      <p><strong>Monatliche Workshops für Fortgeschrittene:</strong></p>\n" +
    "      <p>Immer montags von 21.00 bis 22.30 Uhr</p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p><strong class=\"style2\">02.12.2013 &amp;</strong></p>\n" +
    "      <p class=\"style2\"><strong>11.01.2014</strong></p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <strong>&ldquo;After Workshop&rdquo; Catriona Wiles und Paul Wardon</strong>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p class=\"style3\">11.00-14.00 Uhr</p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <p>Die Inhalte des Intensiv Workshops vom August 2013 werden wiederholt und vertieft. </p>\n" +
    "      <p>Workshopteilnehmer zahlen 15 € pro Person. Wer nicht dabei war, zahlt 35 € pro Person.</p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td class=\"style2\">\n" +
    "      <p><strong class=\"style2\">16.12.2013 &amp;</strong></p>\n" +
    "      <p><strong>08.02.2014</strong></p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <strong>&bdquo;After Workshop&ldquo; Chuck Brown</strong>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p><span class=\"style3\">11.00-14.00 Uhr</span></p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <p>Die Inhalte des Workshops werden wiederholt. Dies geschieht besonders im Hinblick auf <strong>Technik</strong>.</p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "      <p><strong class=\"style2\">21.12.2013</strong></p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "      <p><strong>West Coast Swing Intensiv</strong></p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>&nbsp;</td>\n" +
    "    <td>\n" +
    "      <p>West Coast Swing Intensiv mit &bdquo;The Man&ldquo; Douglas aus den USA in der Zeit von 11.00 bis 15.00 Uhr im &bdquo;Tango Chocolate&ldquo;.</p>\n" +
    "      <p class=\"style2\"><strong>SOLD OUT</strong></p>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "</table>\n"
  );

}]);

