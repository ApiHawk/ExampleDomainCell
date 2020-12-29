const express = require('express');
const BilliaDomainsRoute = express.Router();
const { QueryBuilder, toRestResource } = require("@apihawk/billia-sdk");

class DomainContactsService {
  constructor() {
    this.queryBuilder = new QueryBuilder();
    this.ENDPOINT = "/domain/contact";
  }

  /**
   * List Billia contacts
   * @param query
   * @param user
   * @param api
   * @returns {Promise}
   */
  async listBilliaContacts(query, user, api) {
    const response = await api.call({
      headers: {
        "Accept": "application/hal+json",
        "Content-Type": "application/json",
      },
      method: "GET",
      query: this.queryBuilder.parse(query),
      session: user,
      url: `${this.ENDPOINT}`,
    });

    return toRestResource(response, "domain_contact");
  }

  /**
   * Create Billia contact
   * @param data
   * @param user
   * @param api
   * @returns {Promise}
   */
  async createBilliaContact(data, user, api) {
    return api.call({
      body: data,
      headers: {
        "Accept": "application/hal+json",
        "Content-Type": "application/json",
      },
      method: "POST",
      session: user,
      url: `${this.ENDPOINT}`,
    });
  }

  /**
   * Update Billia contact
   * @param data
   * @param user
   * @param api
   * @returns {Promise}
   */
  async updateBilliaContact(data, user, api) {
    const contactData = {
      address1: data.address1 || "",
      address2: data.address2 || "",
      city: data.city || "",
      country_code: data.country_code || "",
      custom_fields: data.custom_fields || "{}",
      email: data.email || "",
      firstname: data.firstname || "",
      job_title: data.job_title || "",
      lastname: data.lastname || "",
      organization: data.organization || "",
      phone: data.phone || "",
      postal_code: data.postal_code || "",
      state: data.state || "",
      user_id: data.user_id,
    };

    return api.call({
      body: contactData,
      headers: {
        "Accept": "application/hal+json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      session: user,
      url: `${this.ENDPOINT}/${data.contact_id}`,
    });
  }

  /**
   * Delete Billia contact
   * @param id
   * @param user
   * @param api
   * @returns {Promise}
   */
  async deleteBilliaContact(id, user, api) {
    return api.call({
      headers: {
        "Accept": "application/hal+json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
      session: user,
      url: `${this.ENDPOINT}/${id}`,
    });
  }

  /**
   * List assigned contacts
   * @param customerProductId
   * @param user
   * @param api
   * @returns {Promise}
   */
  async listAssignedContacts(customerProductId, user, api) {
    return api.call({
      body: {
        action: "fetchAll.Contact",
        customer_product_id: customerProductId,
      },
      headers: {
        "Accept": "application/hal+json",
        "Content-Type": "application/json",
      },
      method: "POST",
      session: user,
      url: "/appcell/execute",
    });
  }

  /**
   * Assign contacts
   * @param customerProductId
   * @param contacts
   * @param user
   * @param api
   * @returns {Promise}
   */
  async assignContacts(customerProductId, contacts, user, api) {
    return api.call({
      body: {
        action: "updateList.Contact",
        customer_product_id: customerProductId,
        payload: contacts,
      },
      headers: {
        "Accept": "application/hal+json",
        "Content-Type": "application/json",
      },
      method: "POST",
      session: user,
      url: "/appcell/execute",
    });
  }
}

class DomainContactsCtrl {
  constructor() {
    this.router = BilliaDomainsRoute;
    this.domainService = new DomainContactsService();

    this.router.get("/", this.listBilliaContacts.bind(this));
    this.router.post("/", this.createBilliaContact.bind(this));
    this.router.patch("/:id", this.updateBilliaContact.bind(this));
    this.router.delete("/:id", this.deleteBilliaContact.bind(this));
    this.router.post("/assigned-contacts", this.listAssignedContacts.bind(this));
    this.router.post("/assign-contact", this.assignContacts.bind(this));
  }

  listBilliaContacts(req, res, next) {
    return this.domainService
      .listBilliaContacts(req.query, req.session.user, res.locals.billia.connection)
      .then(response => res.json(response))
      .catch(next);
  }

  createBilliaContact(req, res, next) {
    return this.domainService
      .createBilliaContact(req.body, req.session.user, res.locals.billia.connection)
      .then(response => res.json(response))
      .catch(next);
  }

  updateBilliaContact(req, res, next) {
    return this.domainService
      .updateBilliaContact(req.body, req.session.user, res.locals.billia.connection)
      .then(response => res.json(response))
      .catch(next);
  }

  deleteBilliaContact(req, res, next) {
    return this.domainService
      .deleteBilliaContact(req.params.id, req.session.user, res.locals.billia.connection)
      .then(response => res.json(response))
      .catch(next);
  }

  listAssignedContacts(req, res, next) {
    return this.domainService
      .listAssignedContacts(req.body.customer_product_id, req.session.user, res.locals.billia.connection)
      .then(response => res.json(response))
      .catch(next);
  }

  assignContacts(req, res, next) {
    return this.domainService
      .assignContacts(req.body.customer_product_id, req.body.contacts, req.session.user, res.locals.billia.connection)
      .then(response => res.json(response))
      .catch(next);
  }

  get routes() {
    return this.router;
  }
}

module.exports = new DomainContactsCtrl().routes;
