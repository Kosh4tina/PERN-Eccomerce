import { Badge, TableCell } from '@windmill/react-ui'
import React from 'react'

const SiteItem = ({site}) => {
  return (
    <>
      <TableCell>#{site.site_id}</TableCell>
      <TableCell>{site.title || "Not Set"}</TableCell>
      <TableCell>
      {site.status === 'Not active' ? (
             <Badge type="danger">{site.status}</Badge>
          ):
            <Badge type="success">{site.status}</Badge>
          }
      </TableCell>
    </>
  )
}

export default SiteItem

