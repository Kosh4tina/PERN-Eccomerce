import {
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHeader,
    TableRow,
  } from "@windmill/react-ui";
import Layout from "layout/Layout";
import SiteItem from "components/SiteItem";
import { useSites } from "context/SiteContext";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import siteService from "services/site.service";

const Site = () =>{
    const { sites, setSites } = useSites();
    const [currentPage, setCurrentPage] = useState(1);
    const history = useHistory();

    const handlePage = (num) => {
        setCurrentPage(num);
      };

    const goToDetails = (site) => {
    history.push({
        pathname: `site/${site.site_id}`,
        state: { site },
    });
    };

    useEffect(() => {
        siteService.getAllSites(currentPage).then((res) => setSites(res.data));
      }, [currentPage, setSites]);

    return (
        <Layout title="Sites" loading={sites === null}>
        <h1 className="my-10 text-center text-4xl font-semibold">All Sites</h1>
        <TableContainer>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sites?.items.map((site) => (
                <TableRow
                  className="cursor-pointer"
                  onClick={() => goToDetails(site)}
                  key={site.site_id}
                >
                  <SiteItem site={site} />
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TableFooter>
            <Pagination
              totalResults={sites?.total}
              resultsPerPage={5}
              onChange={handlePage}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      </Layout>
    );

}

export default Site;
  
  