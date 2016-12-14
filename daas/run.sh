#!/bin/bash
awk '/<tbody>/{p=1} /<\/tbody>/{p=0; next}!p' index.html > index2.html

TO_WRITE="  <tbody>\n"
for i in $(ls -d */)
do
  FOLDER=${i%%/}
  TO_WRITE="$TO_WRITE    <tr>\n"

  if [[ "$FOLDER" =~ ^es.* ]]; then TO_WRITE="$TO_WRITE      <td>elastic search</td>\n"; fi
  if [[ "$FOLDER" =~ ^ca.* ]]; then TO_WRITE="$TO_WRITE      <td>cassandra</td>\n"; fi
  if [[ "$FOLDER" =~ ^core.* ]]; then TO_WRITE="$TO_WRITE      <td>crossdata</td>\n"; fi

  if [[ "$FOLDER" =~ .*loadtest.* ]]; then TO_WRITE="$TO_WRITE      <td>load test</td>\n"; fi
  if [[ "$FOLDER" =~ .*endurance.* ]]; then TO_WRITE="$TO_WRITE      <td>endurance</td>\n"; fi
  if [[ "$FOLDER" =~ .*stress.* ]]; then TO_WRITE="$TO_WRITE      <td>stress</td>\n"; fi

  TO_WRITE="$TO_WRITE      <td>$FOLDER</td>\n"

  TIMESTAMP=$(echo $FOLDER|cut -d "-" -f 2)
  MS=$(perl -e 'print scalar localtime('${TIMESTAMP}' / 1000)')

  TO_WRITE="$TO_WRITE      <td>"$(date --date="$MS" +%d-%m-%Y_%H:%M:%S)"</td>\n"
  TO_WRITE="$TO_WRITE      <td><a target='_blank' href='/daas/$FOLDER'>See</a></td>\n"
  TO_WRITE="$TO_WRITE      <td><a target='_blank' href='/daas/$FOLDER/grafanaHdw.png'>See</a></td>\n"
  TO_WRITE="$TO_WRITE      <td><a target='_blank' href='/daas/$FOLDER/grafaMonitoring.png'>See</a></td>\n"
  TO_WRITE="$TO_WRITE      <td><a target='_blank' href='/daas/$FOLDER/simulation.log'>See</a></td>\n"

  TO_WRITE="$TO_WRITE    </tr>\n"
done

TO_WRITE="$TO_WRITE  </tbody>\n</table>"

sed -i "s|</table>|$TO_WRITE|g" index2.html
mv index2.html index.html
